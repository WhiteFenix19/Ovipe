window.cagaste = 700 // poner el delay que quieran en milisegundos

window.hackeando = (cagaste * 3);
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

        function breeding() {
            ewewewewewe = document.getElementsByClassName("pet").length - 1;
            awawawa = Math.floor((Math.random() * (ewewewewewe - 1 + 1)) + 1);
            var we = document.getElementsByClassName("pet")[awawawa];
            console.log(awawawa);
            we.click();
            wait(window.cagaste);
            document.getElementsByClassName("ui-dialog-buttonset")[0].getElementsByClassName("ui-button")[0].click();
            wait(window.cagaste);
            history.back();
            wait(window.cagaste);
            var owowo = (document.getElementsByClassName("ui-icon ui-icon-circle-triangle-e")[0]);
            owowo.click();
            };

        
        function dos()
        {
            
            breedingtimer = setInterval(breeding, window.hackeando);
            $('body').css('background-color', '#125e20');
            
        }
        function cosas()
        {
            if (contenedor == true){
            clearInterval(breedingtimer);
            $('body').css('background-color', '#ffffff');}
        }
