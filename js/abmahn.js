function getText(input) {
  return document.getElementById(input).value || '';
}

function getDate(input) {
  var date = Date.parse(document.getElementById(input));
  if( !date ) return 'von letzter Woche';
  return 'vom ' + date.toLocaleDateString();
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

function waldorff() {
  setText('abmahnender_kanzlei', 'Waldorff & Frommer RAe');
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
  setSelection('tat_datum_zeit', '20:45' );
}

function abmahnbeantworter() {
  step6_done();

  var today = new Date();
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

  var datums_feld = getText('abgemahnter_ort') + ', ' + today.toLocaleDateString();
  var zeichen = 'Ihr Zeichen ' + getText('vorgang_aktenzeichen');

  var fliesstext = 'Sehr geehrte Damen und Herren,\n\n';

  fliesstext += 'ich nehme Bezug auf Ihr Schreiben vom ' + getText('vorgang_datum') + '. Hierzu muss ich Ihnen mitteilen, dass ich den angeblichen Verstoß nicht begangen habe.\n\n';

  fliesstext += 'Vorsorglich weise ich darauf hin, dass ich ein offenes W-Lan mit einer Vorschaltseite betreibe, das von meinen Nachbarn und meiner Familie mitbenutzt wird.\n\n';

  fliesstext += 'Ich komme weder als Täter noch als Störer in Betracht.\n\n';

  var frist = new Date(today.getTime() + 1209600000);
  fliesstext += 'Ich fordere Sie daher auf, die Abmahnung umgehend zurückzunehmen. Sollte ich bis zum ' + frist.toLocaleDateString() + ' keine diesbezügliche Nachricht von Ihnen erhalten haben, werde ich mit anwaltlicher Hilfe das Nichtbestehen der Forderung gerichtlich bestätigen lassen.\n\n';

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
      fontSize: 12,
    }
  }
  pdfMake.createPdf(docDefinition).download('Abmahnung-' + getText('vorgang_aktenzeichen') + '.pdf');

}
