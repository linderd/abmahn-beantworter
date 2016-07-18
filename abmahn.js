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

function schutt() {
  setText('abmahnender_kanzlei', 'Schutt, Waetke Rechtsanwälte');
  setText('abmahnender_bearbeiter', '');
  setText('abmahnender_strasse', 'Kriegsstraße 37');
  setText('abmahnender_plz', '76133');
  setText('abmahnender_ort', 'Karlsruhe');
  setText('abmahnender_fax', '0721/12 05 05');
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
  setText('vorgang_datum', '10. 6. 2016');

}

function abmahnbeantworter() {
  var today = new Date();
  var absender = getText('abgemahnter_vorname') + ' ' + getText('abgemahnter_nachname') + ', ' + getText('abgemahnter_strasse') + ' in ' + getText('abgemahnter_plz') + ' ' + getText('abgemahnter_ort');

  var bearbeiter = getText('abmahnender_bearbeiter');
  var empfaenger = getText('abmahnender_kanzlei');
  if( bearbeiter ) {
    empfaenger += '\nz. H. ' + bearbeiter;
  }
  empfaenger += '\n' + getText('abmahnender_strasse');
  empfaenger += '\n' + getText('abmahnender_plz') + ' ' + getText('abmahnender_ort');
  var fax = getText('abmahnender_fax');
  if(fax) {
    empfaenger += '\n\n\nPer Fax an: ' + fax;
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
  pdfMake.createPdf(docDefinition).download('Abmahn.pdf');

}
