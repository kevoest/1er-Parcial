function Activacion(MesaX, ini, fin, tot){
    mesa = document.getElementById(MesaX);
    if(mesa.src.match('TableOff.png')){
        mesa.src = "TableOn.png"
        tiempo(ini);
        crono(fin, MesaX, tot);
    
    }else{
        mesa.src = "TableOff.png"
    }
}


const tiempo = (ini) =>{
    time = new Date();
    horas = time.getHours()
    minutos = time.getMinutes()
    segundos = time.getSeconds()
    tiempotot = horas + " ' " + minutos + " '' " + segundos + " ''' ";
    document.getElementById(ini).innerHTML = tiempotot;
}

function crono(fin, MesaX, tot){
    var myVar = setInterval(myTimer, 1000);
    var seg  = 0;
    mesa = document.getElementById(MesaX);
    function myTimer() {
      var d = new Date();
      document.getElementById(fin).innerHTML = seg++;
      if(mesa.src.match('TableOff.png')){
        clearInterval(myVar);
        document.getElementById(totis).innerHeight = "perro";
        total(tot, seg);
      }
    }
}

function total(tot, seg){
    totis = document.getElementById(tot);
    document.getElementById(totis).innerHeight = "perro";
}






