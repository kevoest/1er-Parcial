function Activacion(MesaX, IniX, FinX){
    mesa = document.getElementById(MesaX);
    if(mesa.src.match('TableOff.png')){
        mesa.src = "TableOn.png"
    }else{
        mesa.src = "TableOff.png"
    }
}