window.contenedor = false;
window.delay = 700;
document.addEventListener("keypress", function(event) {
    if (event.keyCode == 49){
if (contenedor == false) {
                dos();
                contenedor = true;   }}

    if (event.keyCode == 51) {
        cosas();
        contenedor = false;

  };});


function girar(){
    document.getElementsByClassName("ui-fieldset ui-widget-content ui-corner-all actions")[0].getElementsByClassName("ui-button ui-corner-all ui-widget")[0].click();
     diez = setTimeout(() => {  
       credito();
    }, window.delay);
 }

 function credito(){
    try {
    document.getElementsByClassName("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix")[0].getElementsByClassName("ui-button ui-corner-all ui-widget")[0].click();
        once = setTimeout(() => {  
            pasar();
         }, window.delay);}
         catch (e) {
            pasar();
          }}


function pasar(){
 document.getElementsByClassName("ui-icon ui-icon-circle-triangle-e")[0].click()
 doce = setTimeout(() => {  
    girar();
 }, window.delay);
}
    function dos()
    {
        
          girar();
        $('body').css('background-color', '#125e20');
        
    }
    function cosas()
    {
        if (contenedor == true){
        
        clearTimeout(diez);
        clearTimeout(once);
        $('body').css('background-color', '#ffffff');}
    }
   
    
