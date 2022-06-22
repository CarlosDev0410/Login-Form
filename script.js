    function esconder(){
        document.getElementById("loading").style.visibility = "hidden";
    }


    function mostrar(){
        document.getElementById("loading").style.visibility = "visible"; 

        const tempo = setTimeout(() => esconder(), 2000);
    }

