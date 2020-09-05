var tipo = getParameterByName("tipo");
var src_imagenes = ["../img/ortografia_bv/vacuna.jpg", "../img/ortografia_bv/burro.png", "../img/ortografia_bv/llaves2.png", "../img/ortografia_bv/burbujas.jpg", "../img/ortografia_bv/abrazar.jpg",
    "../img/ortografia_bv/veleta.jpg"];
var texto_imagenes = ["A Daniel le pusieron hoy una ______", "El ______ es un animal peludo", "Luis acaba de perder las ______ de su auto", "En verano salimos al parque hacer ______", "Juan le gusta ______ a su mamá",
    "La ______ nos avisa cuando hay viento"];
var opcion_1 = ["vacuna", "vurro", "llaves", "burbujas", "avrazar", "veleta"];
var opcion_2 = ["bacuna", "burro", "llabes", "vurbujas", "abrazar", "beleta"];
var opcion_correcta = ["vacuna", "burro", "llaves", "burbujas", "abrazar", "veleta"];

var src_imagenes_gj = ["../img/ortografia_gj/oveja.png", "../img/ortografia_gj/viajes.jpg", "../img/ortografia_gj/gato.jpg", "../img/ortografia_gj/girasol.jpg",
    "../img/ortografia_gj/tijeras.png", "../img/ortografia_gj/abeja.png", "../img/ortografia_gj/conejo.png"];
var texto_imagenes_gj = ["Qué animal nos da mucha lana", "En vacaciones hacemos muchos ______ en coche", "¿Qué animal ves?", "¿Qué planta es?",
    "Sirven para cortar muchas cosas, como el papel", "¿Qué es?", "¿Qué animal le gusta comer zanahorias?"]
var opcion_1_gj = ["obeja", "viajes", "gato", "jirasol", "tijeras", "abeja", "conego"];
var opcion_2_gj = ["oveja", "viages", "jato", "girasol", "tigeras", "aveja", "conejo"];
var opcion_correcta_gj = ["oveja", "viajes", "gato", "girasol", "tijeras", "abeja", "conejo"];

var src_imagenes_lly = ["../img/ortografia_lly/grillo.png", "../img/ortografia_lly/desayuno.jpg", "../img/ortografia_lly/silla.jpg",
    "../img/ortografia_lly/playa.jpg", "../img/ortografia_lly/ballena.jpg", "../img/ortografia_lly/ladrillos.jpg", "../img/ortografia_lly/rayos.jpg"];
var texto_imagenes_lly = ["En mi pueblo por la noche se escuchan muchos", "Antes de ir a la escuela debemos siempre", "¿Qué ves?", "Todas las vacaciones con mi familia nos vamos de vacaciones a la  ______",
    "En el mar podemos encontrar peces y _____", "La casa de mi vecino esta echo de ______", "Ayer mientras lloviá vi muchos ______"];
var opcion_1_lly = ["grillos", "desallunar", "silla", "playa", "ballenas", "ladriyos", "rayos"];
var opcion_2_lly = ["griyos", "desayunar", "siya", "plalla", "bayenas", "ladrillos", "rallos"];
var opcion_correcta_lly = ["grillos", "desayunar", "silla", "playa", "ballenas", "ladrillos", "rayos"];

var cont = 0;

var puntaje = 0;
var puntajeMal = 0;
var limite = texto_imagenes.length;

function bv() {

}
function gj() {
    document.getElementById('grama').style.display = 'inline';
    console.log('2')
}
function lly() {
    console.log('3')

}

function comenzar() {
    document.getElementById('comenzar').style.display = 'none';
    document.getElementById('sonido_fondo').play();
    if (tipo == 0) {
        document.getElementById('gramatica_bv').style.display = 'inline';
    }
    if (tipo == 1) {
        document.getElementById('gramatica_gj').style.display = 'inline';
    }
    if (tipo == 2) {
        document.getElementById('gramatica_lly').style.display = 'inline';
    }
}
async function recibirRespuestas() {

    if (tipo == 0) {
        var value = document.querySelector('input[name="price"]:checked').value;

        if (value == opcion_correcta[cont]) {
            puntaje = puntaje + 1;
            console.log("entrooo")
            document.getElementById("correcto").style.display = "inline";
            document.getElementById('sonido_fondo').pause();
            document.getElementById('sonido_correcto').play();
            await sleep(3000)
            document.getElementById("correcto").style.display = "none";
            document.getElementById('sonido_fondo').play();
            this.siguiente();



        } else {
            puntajeMal = puntajeMal + 1;

            document.getElementById("incorrecto").style.display = "inline";
            document.getElementById('sonido_fondo').pause();
            document.getElementById('sonido_incorrecto').play();
            await sleep(4000)
            document.getElementById('sonido_fondo').play();
            document.getElementById("incorrecto").style.display = "none";
            this.siguiente();

        }
    }
    if (tipo == 1) {

        var value = document.querySelector('input[name="price_gj"]:checked').value;

        if (value == opcion_correcta_gj[cont]) {

            puntaje = puntaje + 1;
            document.getElementById("correcto").style.display = "inline";
            document.getElementById('sonido_fondo').pause();
            document.getElementById('sonido_correcto').play();
            await sleep(3000)
            document.getElementById("correcto").style.display = "none";
            document.getElementById('sonido_fondo').play();
            this.siguiente_gj();



        } else {
            puntajeMal = puntajeMal + 1;
            document.getElementById("incorrecto").style.display = "inline";
            document.getElementById('sonido_fondo').pause();
            document.getElementById('sonido_incorrecto').play();
            await sleep(4000)
            document.getElementById('sonido_fondo').play();
            document.getElementById("incorrecto").style.display = "none";
            this.siguiente_gj();
        }
    }

    if (tipo == 2) {

        var value = document.querySelector('input[name="price_lly"]:checked').value;

        if (value == opcion_correcta_lly[cont]) {

            puntaje = puntaje + 1;
            document.getElementById("correcto").style.display = "inline";
            document.getElementById('sonido_fondo').pause();
            document.getElementById('sonido_correcto').play();
            await sleep(3000)
            document.getElementById("correcto").style.display = "none";
            document.getElementById('sonido_fondo').play();
            this.siguiente_lly();



        } else {
            puntajeMal = puntajeMal + 1;
            puntajeMal = puntajeMal + 1;
            document.getElementById("incorrecto").style.display = "inline";
            document.getElementById('sonido_fondo').pause();
            document.getElementById('sonido_incorrecto').play();
            await sleep(4000)
            document.getElementById('sonido_fondo').play();
            document.getElementById("incorrecto").style.display = "none";
            this.siguiente_lly();
        }
    }


}
function siguiente() {
    var check = "";
    var mal = "";
    if (cont < texto_imagenes.length - 1) {
        console.log(cont)
        document.getElementById("imagen").src = src_imagenes[cont + 1];
        document.getElementById("opcion1").value = opcion_1[cont + 1];
        document.getElementById("opcion2").value = opcion_2[cont + 1];

        var pregunta = document.getElementById("pregunta");
        pregunta.innerHTML = texto_imagenes[cont + 1];

        var label_opcion1 = document.getElementById("label_opcion1");
        label_opcion1.innerHTML = opcion_1[cont + 1];

        var label_opcion2 = document.getElementById("label_opcion2");
        label_opcion2.innerHTML = opcion_2[cont + 1];

        cont++;


    } else {
        if (puntaje > puntajeMal) {
            this.validar("gramatica_bv","ganar_imagen");
        } else {
            this.validar("gramatica_bv","perder_imagen");
        }
    }

    for (var i = 0; i < puntaje; i++) {
        check = check + "&#9989; ";
    }
    for (var i = 0; i < puntajeMal; i++) {
        mal = mal + "&#10060;";
    }
    console.log("mal ", puntajeMal)
    var puntaje_html = document.getElementById("puntaje");
    puntaje_html.innerHTML = "Puntaje: " + check + "<br/> &nbsp; &nbsp;" + mal;
}

function siguiente_gj() {
    var check = "";
    var mal = "";
    for (var i = 0; i < puntaje; i++) {
        check = check + "&#9989; "
    }
    for (var i = 0; i < puntajeMal; i++) {
        mal = mal + "&#10060;"
    }
    if (cont < texto_imagenes_gj.length) {
        var puntaje_html = document.getElementById("puntaje_gj");
        puntaje_html.innerHTML = "Puntaje: " + check + "<br/> &nbsp; &nbsp;" + mal;
    }

    if (cont < texto_imagenes_gj.length - 1) {
        console.log(cont)
        document.getElementById("imagen_gj").src = src_imagenes_gj[cont + 1];
        document.getElementById("opcion1_gj").value = opcion_1_gj[cont + 1];
        document.getElementById("opcion2_gj").value = opcion_2_gj[cont + 1];

        var pregunta = document.getElementById("pregunta_gj");
        pregunta.innerHTML = texto_imagenes_gj[cont + 1];

        var label_opcion1 = document.getElementById("label_opcion1_gj");
        label_opcion1.innerHTML = opcion_1_gj[cont + 1];

        var label_opcion2 = document.getElementById("label_opcion2_gj");
        label_opcion2.innerHTML = opcion_2_gj[cont + 1];

    } else {
        //cuando el contador llegue a cero quiere decir que se acabaron las imagenes
        //mandar de final la foto del puntaje  junto con la imagen ganadora o perdedora 
        if (puntaje > puntajeMal) {
            this.validar("gramatica_gj","ganar_imagen");
        } else {
            this.validar("gramatica_gj","perder_imagen");
        }
    }

    cont++;

}
function siguiente_lly() {
    var check = "";
    var mal = "";
    for (var i = 0; i < puntaje; i++) {
        check = check + "&#9989; "
    }
    for (var i = 0; i < puntajeMal; i++) {
        mal = mal + "&#10060;"
    }
    if (cont < texto_imagenes_gj.length) {
        var puntaje_html = document.getElementById("puntaje_lly");
        puntaje_html.innerHTML = "Puntaje: " + check + "<br/> &nbsp; &nbsp;" + mal;
    }

    if (cont < texto_imagenes_lly.length - 1) {
        console.log(cont)
        document.getElementById("imagen_lly").src = src_imagenes_lly[cont + 1];
        document.getElementById("opcion1_lly").value = opcion_1_lly[cont + 1];
        document.getElementById("opcion2_lly").value = opcion_2_lly[cont + 1];

        var pregunta = document.getElementById("pregunta_lly");
        pregunta.innerHTML = texto_imagenes_lly[cont + 1];

        var label_opcion1 = document.getElementById("label_opcion1_lly");
        label_opcion1.innerHTML = opcion_1_lly[cont + 1];

        var label_opcion2 = document.getElementById("label_opcion2_lly");
        label_opcion2.innerHTML = opcion_2_lly[cont + 1];

    } else {
        //cuando el contador llegue a cero quiere decir que se acabaron las imagenes
        //mandar de final la foto del puntaje  junto con la imagen ganadora o perdedora 
        if (puntaje > puntajeMal) {
            this.validar("gramatica_lly","ganar_imagen");
        } else {
            this.validar("gramatica_lly","perder_imagen");
        }
    }

    cont++;

}

function validar(id, id_ganar) {
    document.getElementById(id).style.display = "none";
    document.getElementById(id_ganar).style.display = "inline";
    document.getElementById("validar").style.display = "inline";
    var regresar = document.getElementById("regresar");

    var reintentar = document.getElementById("reintentar");
    regresar.style.display = "inline";
    reintentar.style.display = "inline";


}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function regresar() {
    location.href = "../index.html"
}
function reintentar() {
    location.href = "ortografia.html?tipo=" + tipo ;
}