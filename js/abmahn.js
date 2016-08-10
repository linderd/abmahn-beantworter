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

function setSelection(id, selection) {
  document.getElementById(id).value = selection;
}

function getCheck(id) {
  return document.getElementById(id).checked;
}

function scrollTo(el) {
    if(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) {
     el.scrollIntoView();
     return;
    }
    var duration = 500;
    var start = window.pageYOffset;
    var end = document.getElementById(el).getBoundingClientRect().top + window.pageYOffset;

    var clock = Date.now();
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        function(fn){window.setTimeout(fn, 15);};

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

function step0_cancel() { setClass('wrapper', 'stepcancel'); }
function step0_done()   { setClass('wrapper', 'step1'); scrollTo('head1'); }
function step1_done()   { setClass('wrapper', 'step2'); scrollTo('head1'); }
function step2_done()   { setClass('wrapper', 'step3'); scrollTo('head2'); }
function step3_done()   { setClass('wrapper', 'step4'); scrollTo('head3'); }
function step4_done()   { setClass('wrapper', 'step5'); scrollTo('head4'); }
function step5_done()   { setClass('wrapper', 'step6'); scrollTo('head5'); }
function step6_done()   { setClass('wrapper', 'step7'); scrollTo('head6'); }

function waldorf() {
  setText('abmahnender_kanzlei', 'Waldorf & Frommer RAe');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'Beethovenstraße 12');
  setText('abmahnender_plz', '80336');
  setText('abmahnender_ort', 'München');
  setText('abmahnender_fax', '089/52 05 72 30');
}

function sasse() {
  setText('abmahnender_kanzlei', 'Sasse & Partner Rechtsanwälte');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'Neumühlen 17');
  setText('abmahnender_plz', '22763');
  setText('abmahnender_ort', 'Hamburg');
  setText('abmahnender_fax', '040/8222699 11');
}

function fareds() {
  setText('abmahnender_kanzlei', 'Fareds Rechtsanwaltsgesellschaft mbH');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'Jungfernstieg 40');
  setText('abmahnender_plz', '20354');
  setText('abmahnender_ort', 'Hamburg');
  setText('abmahnender_fax', '040 / 43 20 84 710');
}

function rasch() {
  setText('abmahnender_kanzlei', 'Rasch Rechtsanwälte');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'An der Alster 6');
  setText('abmahnender_plz', '20099');
  setText('abmahnender_ort', 'Hamburg');
  setText('abmahnender_fax', '040/244 297-20');
}

function wesave() {
  setText('abmahnender_kanzlei', 'WeSaveYourCopyrights Rechtsanwaltsgesellschaft mbH');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'Walter-Kolb-Straße 9-11');
  setText('abmahnender_plz', '60594');
  setText('abmahnender_ort', 'Frankfurt am Main');
  setText('abmahnender_fax', '069/663 68 41 - 222');
}

function schutt() {
  setText('abmahnender_kanzlei', 'Schutt, Waetke Rechtsanwälte');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'Kriegsstraße 37');
  setText('abmahnender_plz', '76133');
  setText('abmahnender_ort', 'Karlsruhe');
  setText('abmahnender_fax', '0721/12 05 05');
}

function schulenberg() {
  setText('abmahnender_kanzlei', 'Schulenberg & Schenk Rechtsanwälte');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'Alsterchaussee 25');
  setText('abmahnender_plz', '20149');
  setText('abmahnender_ort', 'Hamburg');
  setText('abmahnender_fax', '040/73440860');
}

function sebastian() {
  setText('abmahnender_kanzlei', 'Daniel Sebastian Rechtsanwalt');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', ' Storkower Str. 158');
  setText('abmahnender_plz', '10407');
  setText('abmahnender_ort', 'Berlin');
  setText('abmahnender_fax', '030/88 92 20 21');
}

function ausfuellen() {
  setText('abgemahnter_vorname', 'Max');
  setText('abgemahnter_nachname', 'Mustermann');
  setText('abgemahnter_zusatz', 'c/o beim Nachbarn');
  setText('abgemahnter_strasse', 'Lange Straße 126');
  setText('abgemahnter_plz', '10999')
  setText('abgemahnter_ort', 'Berlin');

  setText('abmahnender_kanzlei', 'Waldorff & Frommer');
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
}

function abmahnbeantworter() {
  // collect all date Time info
  var today = new Date();
  var vorgang = new Date(getValue('vorgang_datum_jahr'), getValue('vorgang_datum_monat'), getValue('vorgang_datum_tag'));
  var t = getValue('tat_uhrzeit').split(':');
  var tatzeit = new Date(getValue('tat_datum_jahr'), getValue('tat_datum_monat'), getValue('tat_datum_tag'), t[0], t[1] );

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

  var datums_feld = getText('abgemahnter_ort') + ', ' + today.toLocaleDateString('de-DE');
  var zeichen = 'Ihr Zeichen ' + getText('vorgang_aktenzeichen');

  var fliesstext = 'Sehr geehrte Damen und Herren,\n\n';

  fliesstext += 'vielen Dank für den außergerichtlichen Hinweis vom ' + vorgang.toLocaleDateString('de-DE') + ', dass mir eine urheberrechtliche Rechtsverletzung vorgeworfen wird.\n\n';

  fliesstext += 'Nach Prüfung des Sachverhaltes kann ich Ihnen jedoch erleichtert mitteilen, dass ich die angebliche Urheberrechtsverletzung vom ' + tatzeit.toLocaleDateString('de-DE') + ' nicht begangen habe. In diesem von Ihnen geschilderten Zusammenhang komme ich weder als Täter noch als Störer in Betracht.\n\n'

  var zudem = 0;
  if(getCheck('alibi_urlaub')) {
    fliesstext += 'Ich befand mich zum angeblichen Tatzeitpunkt am ' + tatzeit.toLocaleDateString('de-DE') + ' um ' + tatzeit.toLocaleTimeString('de-DE') + ' nachweislich im Urlaub.';
    zudem = 1;
  }
  if(getCheck('alibi_ausserhalb')) {
    fliesstext += zudem ? ' Zudem befand ich' : 'Ich befand';
    fliesstext += ' mich zum angeblichen Tatzeitpunkt am ' + tatzeit.toLocaleDateString('de-DE') + ' um ' + tatzeit.toLocaleTimeString('de-DE') + ' beruflich im Ausland.';
    zudem = 1;
  }
  if(getCheck('alibi_arbeit')) {
    fliesstext += zudem ? ' Zudem befand ich' : 'Ich befand';
    fliesstext += ' mich zum angeblichen Tatzeitpunkt am ' + tatzeit.toLocaleDateString('de-DE') + ' um ' + tatzeit.toLocaleTimeString('de-DE') + ' nachweislich an meinem Arbeitsplatz, dies kann durch meine Kollegen bezeugt werden.';
    zudem = 1;
  }
  if(getCheck('alibi_besuch')) {
    fliesstext += zudem ? ' Zudem hatte ich' : 'Ich hatte';
    fliesstext += ' zum angegebenen Tatzeitpunkt am ' + tatzeit.toLocaleDateString('de-DE') + ' um ' + tatzeit.toLocaleTimeString('de-DE') + ' nachweislich Besuch und dieser kann bezeugen, dass ich zu diesem Zeitpunkt meinen Rechner nicht benutzte.';
    zudem = 1;
  }
  if(getCheck('alibi_nichtzuhause')) {
    fliesstext += zudem ? ' Zudem befand ich' : 'Ich befand';
    fliesstext += ' mich zum angeblichen Tatzeitpunkt am ' + tatzeit.toLocaleDateString('de-DE') + ' um ' + tatzeit.toLocaleTimeString('de-DE') + ' nachweislich nicht zuhause. Dafür gibt es Zeugen.';
    zudem = 1;
  }
  if(getCheck('alibi_keinendgeraet')) {
    fliesstext += zudem ? ' Zudem bin ich nicht in Besitz eines internetfähigen Computers.' : 'Ich besitze keinen internetfähigen Computer.';
    zudem = 1;
  }
  if(getCheck('alibi_nichtwohnhaft')) {
    fliesstext += zudem ? ' Zudem habe ich' : 'Ich habe';
    fliesstext += ' zum angeblichen Tatzeitpunkt am ' + tatzeit.toLocaleDateString('de-DE') + ' nicht an der angegebenen Adresse gewohnt.';
    zudem = 1;
  }
  if(zudem) {
    fliesstext += '\n\n';
    zudem = 0;
  }

  if(getCheck('alibi_familie')) {
    fliesstext += 'Ich teile meinen Internatanschluss mit meiner Familie, wobei jeder eigenverantwortlich das Internet nutzt. Es gab keine Hinweise darauf, dass ein Familienmitglied Rechtsverletzungen begeht.';
    zudem = 1;
  }
  if(getCheck('alibi_wg')) {
    fliesstext += zudem ? ' Zudem teile ich' : 'Ich teile';
    fliesstext += ' meinen Internetanschluss mit meiner Wohngemeinschaft, wobei jeder Mitbewohner das Internet eigenverantwortlich nutzt.';
    zudem = 1;
  }
  if(getCheck('alibi_offeneswifi')) {
    fliesstext += zudem ? ' Zudem betreibe ich' : 'Ich betreibe';
    fliesstext += ' ein offenes W-LAN für das gesamte Haus, in dem ich lebe. Daraus folgt, dass ich unter die Haftungsprivilegierung des § 8 TMG n. F. falle.';    zudem = 1;
  }
  if(getCheck('alibi_tornode')) {
    fliesstext += zudem ? ' Zudem betrieb ich' : 'Ich betrieb';
    fliesstext += ' zum angeblichen Tatzeitpunkt am ' + tatzeit.toLocaleDateString('de-DE') + ' um ' + tatzeit.toLocaleTimeString('de-DE') + ' nachweislich einen Tor-Exit-Node. Demzufolge falle ich unter die Haftungsprivilegierung des § 8 TMG n. F.';
    zudem = 1;
  }
  if(getCheck('alibi_freifunk')) {
    fliesstext += zudem ? 'Zudem betreibe ich' : 'Ich betreibe';
    fliesstext += ' einen Freifunk-Knoten und werde von § 8 TMG n. F. haftungsprivilegiert.';
    zudem = 1;
  }
  if(getCheck('alibi_fluechtlingshilfe')) {
    fliesstext += zudem ? 'Zudem stelle ich' : 'Ich stelle';
    fliesstext += ' meinen Anschluss Flüchtlingsheimen zur Verfügung.';
    zudem = 1;
  }
  if(zudem) {
    fliesstext += '\n\n';
  }

  var frist = new Date(today.getTime() + 1209600000);
  fliesstext += 'Aufgrund des von mir nun dargelegten Sachverhaltes müssen Sie erkennen, dass die Abmahnung vom ' + vorgang.toLocaleDateString('de-DE') + ' gegen mich unrechtmäßig ergangen ist. Ich fordere Sie deshalb auf, bis zum ' + frist.toLocaleDateString('de-DE') + ' die geltend gemachten Forderungen zurückzunehmen. Sollten Sie diese Frist fruchtlos verstreichen lassen, behalte ich mir ausdrücklich vor, Hilfe eines Rechtsanwaltes in Anspruch zu nehmen und Ihnen die dadurch entstandenen Kosten aufzuerlegen oder/und eine negative Feststellungsklage bei Gericht einzureichen, mit dem Ziel, die Unrechtmäßigkeit der Abmahnung feststellen zu lassen.\n\n';

  fliesstext += 'Mit freundlichen Grüßen';
  var signatur = getText('abgemahnter_nachname');

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
             { text: absender, fontSize: 7, absolutePosition: { x: 62.3622, y: 153.071 } },
             { text: empfaenger, fontSize: 11, absolutePosition: { x: 62.3622, y: 181.417 } },
             { text: zeichen, bold: true, absolutePosition: { x: 62.3622, y: 270+40 } },
             { text: datums_feld, alignment: 'right', margin: [ 62.3622 - 40.0, 270, 62.3622, 0 ] },
             { text: fliesstext, margin: [ 62.3622 - 40.0, 30, 62.3622, 0 ] },
             { text: signatur, margin: [ 40, 27, 0, 0 ] },
    ],
    pageSize: 'A4',
    defaultStyle: {
      font: 'Gentium Book Basic',
      fontSize: 11,
    }
  }
  pdfMake.createPdf(docDefinition).download('Abmahnung-' + getText('vorgang_aktenzeichen') + '.pdf');

  // advance view
  step6_done();
}
