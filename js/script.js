$(document).ready(function(){

  var studente = {
    'nome': '',
    'cognome': '',
    'eta': 0,
  }
  for (var k in studente) {
    // alert(studente[k]);
  }

  var elencoStudentiCredibili = [
    {
      'nome': 'jacopa',
      'cognome': 'Tricheco',
      'eta': 1,
    },
    {
      'nome': 'Saro',
      'cognome': 'Foca',
      'eta': 2,
    },
    {
      'nome': 'Giacoma',
      'cognome': 'Pinguino',
      'eta': 3,
    },
    {
      'nome': 'Andreo',
      'cognome': 'Moffetta',
      'eta': -2,
    },
    {
      'nome': 'Gertrudo',
      'cognome': 'Vertebra',
      'eta': -1,
    },
  ];
  for (var i = 0; i < elencoStudentiCredibili.length; i++) {
      alert( elencoStudentiCredibili[i].nome +' '+ elencoStudentiCredibili[i].cognome );
  }

});
