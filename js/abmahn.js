function getText(input) {
  return document.getElementById(input).value || '';
}

function getValue(el) {
  var e = document.getElementById(el);
  return e.options[e.selectedIndex].value;
}

function setText(input, text) {
  document.getElementById(input).value = text;
}

function setClass(id, classes) {
  document.getElementById(id).className = classes;
}

function hasClass(id, classes) {
  return (" " + document.getElementById(id).className + " ").replace(/[\n\t]/g, " ").indexOf(" " + classes + " ") > -1;
}

function addClass(id, classes) {
  if (hasClass(id, classes)) { return; }
  document.getElementById(id).className += ' ' + classes;
}

function setExclusiveClass(id,value,clearpattern) {
  var reg = new RegExp('(\\s|^)' + clearpattern + '-[^\\s]+(\\s|$)');
  var elem = document.getElementById(id);
  elem.className = elem.className.replace(reg, ' ') + ' ' + clearpattern + '-' + value;
}

function setSelection(id, selection) {
  document.getElementById(id).value = selection;
}

function getCheck(id) {
  return document.getElementById(id).checked;
}

function ensureContent() {
  var missing = 0;
  for(var i = 0;i<arguments.length; i++){
    var elem = document.getElementById(arguments[i]);
    if(elem.value=='') {
      elem.className='missing';
      elem.onkeypress=function(){
        this.className='';
        delete elem.onkeypress;
      }
      ++missing;
    } else
      elem.className='';
  }
  return missing;
}

// Code is heavily inspired by
// https://github.com/alicelieutier/smoothScroll/blob/master/smoothscroll.js
function scrollTo(end) {
    if(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) {
       window.scroll(0, end);
       return;
    }
    var duration = 500;
    var start = window.pageYOffset;
//    var end = document.getElementById(el).getBoundingClientRect().top + window.pageYOffset;

    var clock = Date.now();
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        function(fn){window.setTimeout(fn, 10);};

    var step = function(){
        var elapsed = Date.now() - clock;
        var t = elapsed / duration;
        if (elapsed > duration)
           var pos =end;
        else
           var pos = start + (end - start) * (t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1);

        window.scroll(window.pageXOffset, pos);

        if (elapsed <= duration) {
            requestAnimationFrame(step);
        }
    }
    step();
}

/* Handle all visual transitions first */
function hide_impressum() { setExclusiveClass('footer', 'hidden', 'impressum'); }
function show_impressum() { setExclusiveClass('footer', 'shown', 'impressum'); }

function show_moreinfo() {              setExclusiveClass('wrapper', 'shown', 'moreinfo'); }
function hide_moreinfo() { scrollTo(0); setExclusiveClass('wrapper', 'hidden', 'moreinfo'); }

function head_n_click(step, scroll_val) {
  if(!hasClass('wrapper', 'stepdone-' + (step - 1).toString() )) { return; }
  scrollTo(scroll_val);
  setExclusiveClass('wrapper', step.toString(), 'step');
  setExclusiveClass('wrapper', 'hidden', 'moreinfo');
}

function head_1_click() { head_n_click(1, 0); }
function head_2_click() { head_n_click(2, 0); }
function head_3_click() { head_n_click(3, 103); }
function head_4_click() { head_n_click(4, 196); }
function head_5_click() { head_n_click(5, 289); }
function head_6_click() { head_n_click(6, 382); }
function head_7_click() { head_n_click(7, 475); }

/* Handle functional step transitions now */
function step_0_cancel() { scrollTo(0);   setClass('wrapper', 'not-confirmed step-0'); }

function step_1_done() {
  addClass('wrapper', 'stepdone-1');
  head_2_click();
}

function step_2_done() {
  if (ensureContent('abmahnender_kanzlei', 'abmahnender_strasse', 'abmahnender_plz', 'abmahnender_ort'))
    setClass('step2-missing', 'warnmiss');
  else {
    setClass('step2-missing', 'hidden');
    addClass('wrapper', 'stepdone-2');
    head_3_click();
  }
}

function step_3_done() {
  if (ensureContent('vorgang_aktenzeichen'))
    setClass('step3-missing', 'warnmiss');
  else {
    setClass('step3-missing', 'hidden');
    addClass('wrapper', 'stepdone-3');
    head_4_click();
  }
}

function step_4_done() {
  addClass('wrapper', 'stepdone-4');
  head_5_click();
}

function step_5_done() {
  addClass('wrapper', 'stepdone-5');
  head_6_click();
}

function step_6_done() {
  if (ensureContent('abgemahnter_nachname', 'abgemahnter_strasse', 'abgemahnter_plz', 'abgemahnter_ort'))
    setClass('step6-missing', 'warnmiss');
  else {
    setClass('step6-missing', 'hidden');
    addClass('wrapper', 'stepdone-6');
    head_7_click();
  }
}

function to_german_date(datum) {
  var months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" ];
  return datum.getDate().toString() + '. ' + months[datum.getMonth()] + ' ' + datum.getFullYear().toString();
}

function to_german_time(uhrzeit) {
  return ('0'+uhrzeit.getHours().toString()).slice(-2)+':'+('0'+uhrzeit.getMinutes().toString()).slice(-2)+' Uhr';
}

/* Handle presets for known kanzleien */
function waldorf() {
  setText('abmahnender_kanzlei', 'Waldorf & Frommer RAe');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'Beethovenstraße 12');
  setText('abmahnender_plz', '80336');
  setText('abmahnender_ort', 'München');
  setText('abmahnender_fax', '089/52 05 72 30');
  ensureContent('abmahnender_kanzlei', 'abmahnender_strasse', 'abmahnender_plz', 'abmahnender_ort');
  setClass('step2-missing', 'hidden');
}

function sasse() {
  setText('abmahnender_kanzlei', 'Sasse & Partner Rechtsanwälte');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'Neumühlen 17');
  setText('abmahnender_plz', '22763');
  setText('abmahnender_ort', 'Hamburg');
  setText('abmahnender_fax', '040/8222699 11');
  ensureContent('abmahnender_kanzlei', 'abmahnender_strasse', 'abmahnender_plz', 'abmahnender_ort');
  setClass('step2-missing', 'hidden');
}

function fareds() {
  setText('abmahnender_kanzlei', 'Fareds Rechtsanwaltsgesellschaft mbH');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'Jungfernstieg 40');
  setText('abmahnender_plz', '20354');
  setText('abmahnender_ort', 'Hamburg');
  setText('abmahnender_fax', '040 / 43 20 84 710');
  ensureContent('abmahnender_kanzlei', 'abmahnender_strasse', 'abmahnender_plz', 'abmahnender_ort');
  setClass('step2-missing', 'hidden');
}

function rasch() {
  setText('abmahnender_kanzlei', 'Rasch Rechtsanwälte');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'An der Alster 6');
  setText('abmahnender_plz', '20099');
  setText('abmahnender_ort', 'Hamburg');
  setText('abmahnender_fax', '040/244 297-20');
  ensureContent('abmahnender_kanzlei', 'abmahnender_strasse', 'abmahnender_plz', 'abmahnender_ort');
  setClass('step2-missing', 'hidden');
}

function wesave() {
  setText('abmahnender_kanzlei', 'WeSaveYourCopyrights Rechtsanwaltsgesellschaft mbH');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'Walter-Kolb-Straße 9-11');
  setText('abmahnender_plz', '60594');
  setText('abmahnender_ort', 'Frankfurt am Main');
  setText('abmahnender_fax', '069/663 68 41 - 222');
  ensureContent('abmahnender_kanzlei', 'abmahnender_strasse', 'abmahnender_plz', 'abmahnender_ort');
  setClass('step2-missing', 'hidden');
}

function schutt() {
  setText('abmahnender_kanzlei', 'Schutt, Waetke Rechtsanwälte');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'Kriegsstraße 37');
  setText('abmahnender_plz', '76133');
  setText('abmahnender_ort', 'Karlsruhe');
  setText('abmahnender_fax', '0721/12 05 05');
  ensureContent('abmahnender_kanzlei', 'abmahnender_strasse', 'abmahnender_plz', 'abmahnender_ort');
  setClass('step2-missing', 'hidden');
}

function schulenberg() {
  setText('abmahnender_kanzlei', 'Schulenberg & Schenk Rechtsanwälte');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'Alsterchaussee 25');
  setText('abmahnender_plz', '20149');
  setText('abmahnender_ort', 'Hamburg');
  setText('abmahnender_fax', '040/73440860');
  ensureContent('abmahnender_kanzlei', 'abmahnender_strasse', 'abmahnender_plz', 'abmahnender_ort');
  setClass('step2-missing', 'hidden');
}

function sebastian() {
  setText('abmahnender_kanzlei', 'Daniel Sebastian Rechtsanwalt');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', ' Storkower Str. 158');
  setText('abmahnender_plz', '10407');
  setText('abmahnender_ort', 'Berlin');
  setText('abmahnender_fax', '030/88 92 20 21');
  ensureContent('abmahnender_kanzlei', 'abmahnender_strasse', 'abmahnender_plz', 'abmahnender_ort');
  setClass('step2-missing', 'hidden');
}

function ausfuellen() {
  setText('abgemahnter_vorname', 'Max');
  setText('abgemahnter_nachname', 'Mustermann');
  setText('abgemahnter_strasse', 'Lange Straße 126');
  setText('abgemahnter_plz', '10999')
  setText('abgemahnter_ort', 'Berlin');

  setText('abmahnender_kanzlei', 'Waldorf & Frommer');
  setText('abmahnender_bearbeiter', 'Horst Müller');
  setText('abmahnender_strasse', 'Beethovenstraße 12');
  setText('abmahnender_plz', '80336');
  setText('abmahnender_ort', 'München');

  setText('vorgang_aktenzeichen', '16P99964sShA');

  setSelection('vorgang_datum_tag', '23' );
  setSelection('vorgang_datum_monat', '5' );
  setSelection('vorgang_datum_jahr', '2016' );

  setSelection('tat_datum_tag', '17' );
  setSelection('tat_datum_monat', '1' );
  setSelection('tat_datum_jahr', '2016' );
  setSelection('tat_uhrzeit', '20:45' );
  addClass('wrapper', 'stepdone-1 stepdone-2 stepdone-3 stepdone-4 stepdone-5 stepdone-6');
}

function abmahnbeantworter() {
  // collect all date Time info
  var today = new Date();

  var vorgang_vom = '';
  if ( getValue('vorgang_datum_monat') != '' && getValue('vorgang_datum_tag'))
    vorgang_vom = ' vom ' + to_german_date(new Date(getValue('vorgang_datum_jahr'), getValue('vorgang_datum_monat'), getValue('vorgang_datum_tag')));

  var tatzeit_vom = '';
  var tatzeit_am = '';
  var tatzeit_am_um = '';
  if ( getValue('tat_datum_monat') != '' && getValue('tat_datum_tag') != '') {
    var tatzeit = new Date(getValue('tat_datum_jahr'), getValue('tat_datum_monat'), getValue('tat_datum_tag'));
    tatzeit_am_um = tatzeit_am = ' am ' + to_german_date(tatzeit);
    tatzeit_vom = ' vom ' + to_german_date(tatzeit);;

    if ( getValue('tat_uhrzeit') != '' )
      tatzeit_am_um = tatzeit_am + ' um ' + getValue('tat_uhrzeit') + ' Uhr';
  }

  var absender = getText('abgemahnter_vorname') + ' ' + getText('abgemahnter_nachname') + ', ' + getText('abgemahnter_strasse') + ' in ' + getText('abgemahnter_plz') + ' ' + getText('abgemahnter_ort');
  var land = getText('abgemahnter_land');
  if(land) {
    absender +=', ' + land;
  }

  var bearbeiter = getText('abmahnender_bearbeiter');
  var empfaenger = getText('abmahnender_kanzlei');
  if(bearbeiter) {
    empfaenger += '\nz. H. ' + bearbeiter;
  }
  empfaenger += '\n' + getText('abmahnender_strasse');
  empfaenger += '\n' + getText('abmahnender_plz') + ' ' + getText('abmahnender_ort');
  var fax = getText('abmahnender_fax');
  if(fax) {
    empfaenger += '\n\n\nPer Fax an: ' + fax;
    document.getElementById('faxempfaenger').innerHTML = 'an ' + fax + ' '
  }

  var datums_feld = getText('abgemahnter_ort') + ', ' + to_german_date(today);
  var zeichen = 'Ihr Zeichen ' + getText('vorgang_aktenzeichen');

  var fliesstext = 'Sehr geehrte Damen und Herren,\n\n';

  fliesstext += 'vielen Dank für den außergerichtlichen Hinweis' + vorgang_vom + ', dass mir eine urheberrechtliche Rechtsverletzung vorgeworfen wird.\n\n';

  fliesstext += 'Nach Prüfung des Sachverhaltes kann ich Ihnen jedoch erleichtert versichern, dass ich die angebliche Urheberrechtsverletzung' + tatzeit_vom + ' nicht begangen habe und auch sonst nicht für die vermeintliche Rechtsverletzung einzustehen habe, denn in dem von Ihnen geschilderten Zusammenhang komme ich weder als Täter noch als Störer in Betracht.\n\n'

  var zudem = 0;
  if(getCheck('alibi_urlaub')) {
    fliesstext += 'Ich befand mich zum angeblichen Tatzeitpunkt' + tatzeit_am_um + ' nachweislich im Urlaub. ';
    zudem = 1;
  }
  if(getCheck('alibi_ausserhalb')) {
    fliesstext += zudem ? 'Zudem befand ich ' : 'Ich befand ';
    fliesstext += 'mich zum angeblichen Tatzeitpunkt' + tatzeit_am_um + ' beruflich im Ausland. ';
    zudem = 1;
  }
  if(getCheck('alibi_arbeit')) {
    fliesstext += zudem ? 'Zudem befand ich ' : 'Ich befand ';
    fliesstext += 'mich zum angeblichen Tatzeitpunkt' + tatzeit_am_um + ' nachweislich an meinem Arbeitsplatz, dies kann durch meine Kollegen bezeugt werden. ';
    zudem = 1;
  }
  if(getCheck('alibi_besuch')) {
    fliesstext += zudem ? 'Zudem hatte ich ' : 'Ich hatte ';
    fliesstext += 'zum angegebenen Tatzeitpunkt' + tatzeit_am_um + ' nachweislich Besuch und dieser kann bezeugen, dass ich zu diesem Zeitpunkt meinen Rechner nicht benutzte. ';
    zudem = 1;
  }
  if(getCheck('alibi_nichtzuhause')) {
    fliesstext += zudem ? 'Zudem befand ich ' : 'Ich befand ';
    fliesstext += 'mich zum angeblichen Tatzeitpunkt' + tatzeit_am_um + ' nachweislich nicht zuhause. Dafür gibt es Zeugen. ';
    zudem = 1;
  }
  if(getCheck('alibi_keinendgeraet')) {
    fliesstext += zudem ? 'Zudem bin ich nicht in Besitz eines internetfähigen Computers. ' : 'Ich besitze keinen internetfähigen Computer. ';
    zudem = 1;
  }
  if(getCheck('alibi_nichtwohnhaft')) {
    fliesstext += zudem ? 'Zudem habe ich ' : 'Ich habe ';
    fliesstext += 'zum angeblichen Tatzeitpunkt' + tatzeit_am + ' nicht an der angegebenen Adresse gewohnt. ';
    zudem = 1;
  }
  if(zudem) {
    fliesstext += '\n\n';
    zudem = 0;
  }

  if(getCheck('alibi_familie')) {
    fliesstext += 'Ich teile meinen Internetanschluss mit meiner Familie, wobei jeder eigenverantwortlich das Internet nutzt. Meine Familienmitglieder sind alle darauf aufmerksam gemacht worden, dass sie keine Urheberrechtsverletzungen begehen dürfen. Es gab auch keine Hinweise darauf, dass ein Familienmitglied Rechtsverletzungen begeht. Für die Handlungen meiner Familienmitglieder bin ich daher nicht verantwortlich. ';
    zudem = 1;
  }
  if(getCheck('alibi_wg')) {
    fliesstext += zudem ? 'Zudem teile ich ' : 'Ich teile ';
    fliesstext += 'meinen Internetanschluss mit meiner Wohngemeinschaft. Jeder meine Mitbewohner nutzt das Internet eigenverantwortlich. Alle Mitbewohner sind alle darauf aufmerksam gemacht worden, dass sie keine Urheberrechtsverletzungen begehen dürfen. Es gab auch keine Hinweise darauf, dass ein Mitbewohner Rechtsverletzungen begeht. Für die Handlungen meiner Mitbewohner bin ich daher nicht verantwortlich. ';
    zudem = 1;
  }
  if(getCheck('alibi_offeneswifi')) {
    fliesstext += zudem ? 'Zudem betreibe ich ' : 'Ich betreibe ';
    fliesstext += 'ein offenes WLAN, das von jedermann in der näheren Umgebung genutzt werden kann. Daraus folgt, dass ich unter die Haftungsprivilegierung des § 8 TMG n. F. falle, also für etwaige Urheberrechtsverletzungen auch nicht als Störer auf Unterlassung in Anspruch genommen werden kann. ';
    zudem = 1;
  }
  if(getCheck('alibi_tornode')) {
    fliesstext += zudem ? 'Zudem betrieb ich ' : 'Ich betrieb ';
    fliesstext += 'zum angeblichen Tatzeitpunkt' + tatzeit_am_um + ' nachweislich einen Tor-Exit-Node. Das bedeutet, dass eine Software auf meinen Systemen den Internet-Verkehr von Menschen, die mir namentlich nicht bekannt sind und die sich überall auf der Welt aufhalten können, lediglich automatisch in das Internet weiterleitet. Demzufolge falle ich unter die Haftungsprivilegierung des § 8 TMG n. F., der die Haftung für die reine Durchleitung von Internet-Verkehr ausschließt, auch soweit es um Unterlassungsansprüche geht. ';
    zudem = 1;
  }
  if(getCheck('alibi_freifunk')) {
    fliesstext += zudem ? 'Zudem betreibe ich ' : 'Ich betreibe ';
    fliesstext += 'einen Freifunk-Knoten (offenes WLAN). Daraus folgt, dass ich unter die Haftungsprivilegierung des § 8 TMG n. F. falle, also für etwaige Urheberrechtsverletzungen auch nicht als Störer auf Unterlassung in Anspruch genommen werden kann. ';
    zudem = 1;
  }
  if(getCheck('alibi_fluechtlingshilfe')) {
    fliesstext += zudem ? 'Zudem stelle ich ' : 'Ich stelle ';
    fliesstext += 'meinen Anschluss Flüchtlingsheimen zur Verfügung. Das bedeutet, dass ich Internet-Verkehr von Menschen, die mir namentlich nicht bekannt sind und die ich angesichts des täglich wechselnden Personenkreises in den Unterkünften und des diversen kulturellen Hintergrundes auch nicht wirksam über das deutsche Urheberrecht informieren kann, lediglich in das Internet weiterleite. Demzufolge falle ich unter die Haftungsprivilegierung des § 8 TMG n. F., der die Haftung für reine Durchleitung ausschließt, auch soweit es um Unterlassungsansprüche geht. ';
    zudem = 1;
  }
  if(zudem) {
    fliesstext += '\n\n';
  }

  var frist = new Date(today.getTime() + 1209600000);
  fliesstext += 'Aufgrund des von mir nun dargelegten Sachverhaltes müssen Sie erkennen, dass Ihre Abmahnung' + vorgang_vom + ' gegen mich unrechtmäßig ergangen ist.\n\n';
  var forderung  = 'Ich fordere Sie deshalb auf, bis zum ' + to_german_date(frist) + ' die geltend gemachten Forderungen mir gegenüber schriftlich zurückzunehmen.\n\n';
  var sanktionen = 'Sollten Sie diese Frist fruchtlos verstreichen lassen, behalte ich mir ausdrücklich vor, die Hilfe eines Rechtsanwaltes in Anspruch zu nehmen und Ihnen die dadurch entstandenen Kosten aufzuerlegen oder/und eine negative Feststellungsklage bei Gericht einzureichen, mit dem Ziel, die Unrechtmäßigkeit der Abmahnung feststellen zu lassen. Durch die unterlassene ausdrückliche schriftliche Rücknahme Ihrer Abmahnung hätten Sie zu einer entsprechenden Klageerhebung auch Anlass gegeben.\n\n';

  var abschluss = 'Mit freundlichen Grüßen';
  var signatur = getText('abgemahnter_nachname');

  var disclaimer = 'Wir haben den Text des Antwortschreibens gemeinsam mit einer Reihe von Juristinnen entworfen, bitten aber um Verständnis, dass wir keinerlei Gewähr für den Inhalt übernehmen können.\n\nDer Dienst "Abmahnbeantworter" stellt außerdem keine Rechtsberatung dar. Die Verwendung des vorgeschlagenen Antwortschreibens erfolgt auf eigene Gefahr.\n\nWir freuen uns über Hinweise auf gerichtliche Entscheidungen, die uns dabei helfen können, den Text des Antwortschreibens zu verbessern.\n\n  Die Abmahnbeantworter';

  pdfMake.fonts = {
    'Gentium Book Basic': {
      normal: 'GenBkBasR.ttf',
      bold: 'GenBkBasB.ttf',
      italics: 'GenBkBasI.ttf',
      bolditalics: 'GenBkBasBI.ttf'
    },
  };
  var docDefinition = {
    background: {
            canvas: [
                {
                    type: 'line',
                    x1: 0,       y1: 297.6378,
                    x2: 28.3465, y2: 297.6378,
                    lineWidth: 0.25,
                    lineColor: 'grey',
                },
                {
                    type: 'line',
                    x1: 0,       y1: 595.276,
                    x2: 28.3465, y2: 595.276,
                    lineWidth: 0.25,
                    lineColor: 'grey',
                },
              ]
            },
    content: [
             { text: 'Haftungsausschluss', color: 'blue', fontSize: 24, margin: [0,0,0,24] },
             { text: disclaimer, fontSize: 18, pageBreak: 'after' },
             { text: absender, fontSize: 7, absolutePosition: { x: 62.3622, y: 153.071 } },
             { text: empfaenger, fontSize: 11, absolutePosition: { x: 62.3622, y: 181.417 } },
             { text: zeichen, bold: true, absolutePosition: { x: 62.3622, y: 270+40 } },
             { text: datums_feld, alignment: 'right', margin: [ 0, 270-20, 0, 0 ] },
             { text: fliesstext, margin: [ 0, 30, 0, 0 ] },
             { text: forderung, bold: true, margin: [ 0, 10, 0, 0 ] },
             { text: sanktionen, margin: [ 0, 10, 0, 0 ] },
             { text: abschluss, margin: [ 0, 0, 0, 0 ] },
             { text: signatur, margin: [ 40, 27, 0, 0 ] },
    ],
    pageSize: 'A4',
    pageMargins: [ 62.3622, 60, 62.3622, 60 ],
    defaultStyle: {
      font: 'Gentium Book Basic',
      fontSize: 11,
    }
  }
  pdfMake.createPdf(docDefinition).download('Abmahnung-' + getText('vorgang_aktenzeichen') + '.pdf');
}
