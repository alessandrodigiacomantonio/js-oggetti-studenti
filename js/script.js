$(document).ready(function(){

  // // fase 1
  // var studente = {
  //   'nome': '',
  //   'cognome': '',
  //   'eta': 0,
  // }
  // for (var k in studente) {
  //   alert(studente[k]);
  // }

  // // fase 2
  // var elencoStudentiCredibili = [
  //   {
  //     'nome': 'jacopa',
  //     'cognome': 'Tricheco',
  //     'eta': 1,
  //   },
  //   {
  //     'nome': 'Saro',
  //     'cognome': 'Foca',
  //     'eta': 2,
  //   },
  //   {
  //     'nome': 'Giacoma',
  //     'cognome': 'Pinguino',
  //     'eta': 3,
  //   },
  //   {
  //     'nome': 'Andreo',
  //     'cognome': 'Moffetta',
  //     'eta': -2,
  //   },
  //   {
  //     'nome': 'Gertrudo',
  //     'cognome': 'Vertebra',
  //     'eta': -1,
  //   },
  // ];
  // for (var i = 0; i < elencoStudentiCredibili.length; i++) {
  //     alert( elencoStudentiCredibili[i].nome +' '+ elencoStudentiCredibili[i].cognome );
  // }

  // fase 3
  var elencoStudenti = [];
  var studente = {
    nome: "",
    cognome: '',
    eta: 0,
  };
  studente.nome = prompt('Inserisci il nome dello studente da aggiungere');
  studente.cognome = prompt('Scrivi il cognome dello studente da aggiungere');
  studente.eta = prompt('Immetti l\'età dello studente da aggiungere');
  elencoStudenti.push(studente);
  console.log(elencoStudenti);

});
