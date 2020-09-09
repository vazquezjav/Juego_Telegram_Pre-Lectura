
var nombre_cuento="";
function cuento(n){
    console.log("caperucita");
    document.getElementById("tarjetas").style.display = "none";
    
    document.getElementById("cuento").style.display = "inline";
    document.getElementById("volver").style.display = "inline";
    document.getElementById("volver-home").style.display = "none";
    document.getElementById("body").style.backgroundColor = '#55D8CF';

    if(n==1){
        nombre_cuento="caperucita";
        
    }
    if(n==2){
        nombre_cuento="cerditos";
        
    }
    if(n==3){
        nombre_cuento="liebre-tortuga";
        
    }
    if(n==4){
        nombre_cuento="la-lechera";
    }
    if(n==5){
        nombre_cuento="bambi";
    }
    if(n==6){
        nombre_cuento="libroselva";
    }
    document.getElementById(nombre_cuento).style.display = "inline";
    
}
function volver(){
    window.location='cuento.html'
}
