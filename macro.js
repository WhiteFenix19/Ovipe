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
            
            setTimeout(() => {
            document.getElementsByClassName("ui-dialog-buttonset")[0].getElementsByClassName("ui-button")[0].click();
          setTimeout(() => {
            history.back();
            setTimeout(() => {
            var owowo = (document.getElementsByClassName("ui-icon ui-icon-circle-triangle-e")[0]);
            owowo.click();
            
            }, 700);
            }, 700);
            }, 700);
            
            };

        
        function dos()
        {
            
            breedingtimer = setInterval(breeding, 3500);
            $('body').css('background-color', '#125e20');
            
        }
        function cosas()
        {
            if (contenedor == true){
            clearInterval(breedingtimer);
            $('body').css('background-color', '#ffffff');}
                else {
                    alert("No hay nada que detener :3");
                }
        }
