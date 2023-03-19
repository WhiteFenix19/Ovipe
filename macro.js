document.addEventListener("keypress", function(event) {
    if (event.keyCode == 49) {

                dos();}
    if (event.keyCode == 51) {
        cosas();
  };});

        function breeding() {
            ewewewewewe = document.getElementsByClassName("pet").length;
            awawawa = Math.floor((Math.random() * (ewewewewewe - 1 + 1)) + 1);
            var we = document.getElementsByClassName("pet")[awawawa];
            console.log(awawawa);
            we.click();
            
            setTimeout(() => {
            var iwiwi = (document.getElementsByClassName("ui-button ui-corner-all ui-widget")[15]);
            iwiwi.click();
            setTimeout(() => {
            history.back();
            setTimeout(() => {
            var owowo = (document.getElementsByClassName("ui-icon ui-icon-circle-triangle-e")[0]);
            owowo.click();
            ;}, 500);
            }, 500);
            }, 500);
            };;
        
        function dos()
        {
            breedingtimer = setInterval(breeding, 3000);
        }
        function cosas()
        {
            clearInterval(breedingtimer);
            alert("Hello! Mi trabajo es contener la macro, TQM, que te hayan salido bonitas las pets");
        }
