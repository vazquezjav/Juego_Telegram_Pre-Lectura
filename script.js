function ortografia(){
    
    document.getElementById("tipo_ortografia").style.display = "inline";
    document.getElementById("categorias").style.display = "none";
}
function ortografia_pagina(n){
    if(n==0){
        console.log("1")
        location.href ="ortografia/ortografia.html?tipo="+n;
    }
    if(n==1){
        console.log("2")
        location.href ="ortografia/ortografia.html?tipo="+n;
    }
    if(n==2){
        console.log("3")
        location.href ="ortografia/ortografia.html?tipo="+n;
    }
    //location.href
}

function abecedario(){
    location.href="abecedario/abecedario.html";
}
function cuento(){
    location.href="cuento/cuento.html"
}
