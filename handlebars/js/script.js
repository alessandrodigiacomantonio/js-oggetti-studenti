$(document).ready(function(){

  $('button').on('click',
  function() {
    var fonte = document.getElementById("di_pelle_di__pollo").innerHTML;
    var modello = Handlebars.compile(fonte);
    var contesto = { messaggio: "", classe:"",};
    contesto.messaggio = $('#fece_una_palla').val();
    contesto.classe = 'a_galla_a_vedere';
    $('#fece_una_palla').val('');
    var html = modello(contesto);
    $('#tutti_i_pesci_vennero').append(html);
    setTimeout(
      function() {
        var fonte = document.getElementById("di_pelle_di__pollo").innerHTML;
        var modello = Handlebars.compile(fonte);
        var contesto = { messaggio: "", classe:"",};
        contesto.messaggio = 'Elefante elegante';
        contesto.classe = 'la_palla_di';
        var html = modello(contesto);
        $('#tutti_i_pesci_vennero').append(html);
      },1*1000);
  });
});
