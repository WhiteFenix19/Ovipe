window.delay = 700; /// Poner que tanto delay quieren
window.delayrepeat = delay + 200; 
window.contenedor = false;
document.addEventListener("keypress", function(event) {
    if (event.keyCode == 49){
if (contenedor == false) {
                dos();
                contenedor = true;   }}

    if (event.keyCode == 51) {
        cosas();
        contenedor = false;

  };});



  function breeding(){
    ewewewewewe = document.getElementsByClassName("pet").length - 1;
    awawawa = Math.floor((Math.random() * (ewewewewewe - 1 + 1)) + 1);
    document.getElementsByClassName("pet")[awawawa].click();

   seis = setTimeout(() => {
    accepting();
    }, window.delay);}

  function accepting()
  {
    try{
    document.getElementsByClassName("ui-dialog-buttonset")[0].getElementsByClassName("ui-button")[0].click();  
    siete = setTimeout(() => {
        volviendo();
        }, window.delay);}
    catch{
        err = setTimeout(() => {
            breeding();
            }, 200);}
    }
    

  function volviendo(){
    history.back();
    ocho = setTimeout(() => {
        pasando();
        }, window.delay);}

  function pasando(){
    document.getElementsByClassName("ui-icon ui-icon-circle-triangle-e")[0].click();
    nueve = setTimeout(() => {
        breeding();
        }, window.delay);}


  function dos()
  {
      
        breeding();
      $('body').css('background-color', '#125e20');
      
  }
  function cosas()
  {
      if (contenedor == true){
    clearTimeout(err);
      clearTimeout(seis);
      clearTimeout(siete);
      clearTimeout(ocho);
      clearTimeout(nueve);
      $('body').css('background-color', '#ffffff');}
  }
