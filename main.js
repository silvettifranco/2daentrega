/* Impresión en HTML de acuerdo a los datos ingresados en el formulario */

let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", escribirNombre);

function escribirNombre() {
    let nombre = document.getElementById("nombre").value;
    var contenido = "El vehículo ingresado es: <strong>" + nombre + "</strong></p>";
    document.getElementById("resultado2").innerHTML = contenido;
}
boton.addEventListener("click", escribirPatente);   
function escribirPatente () {
    let patente= document.getElementById("patente").value;
    var contenido2 = "La patente ingresada es: <strong>" + patente + "</strong></p>";
    document.getElementById("resultado3").innerHTML = contenido2;
}
boton.addEventListener("click", escribirTurno);
function escribirTurno () {
    let turno= document.getElementById("turnos").value;
    if(turno=="turno"){
        var contenido3=6500;
    }else if(turno=="hora"){
        var contenido3=700;
    }else if (turno=="quincena"){
        var contenido3=45500;
    }else if (turno=="mes"){
        var contenido3=95500;
    }
    document.getElementById("resultado4").innerHTML = "El precio que se pagará el alquiler de su vehículo será de $ "+"<strong>"+contenido3+"</strong>"+" por "+turno;
}
boton.addEventListener("click", escribirPropietario);
function escribirPropietario () {
    let propietario= document.getElementById("propietario").value;
    var contenido4 = "Bienvenido: <strong>" + propietario + "</strong></p>";
    document.getElementById("resultado").innerHTML = contenido4;
}



/* Base de datos de autos para alquilar */

class unidades {
    constructor (nombre, imagen, precio, propietario,contacto) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio=precio;
        this.propietario=propietario;
        this.contacto=contacto;
    }
}

const vehiculos = [{nombre:"Peugeot 308", imagen:"308.jpeg", precio:"$4500", propietario:"Juan Salinas",contacto:"2613374046"},{nombre:"Toyota Corolla", imagen:"corolla.jpeg", precio:"$5500", propietario:"Rosa Colombo",contacto:"2614375046"},{nombre:"Volkswagen Polo", imagen:"polo.jpeg", precio:"$3900", propietario:"Marcos Acuña",contacto:"2615374456"},{nombre:"Volkswagen Vento", imagen:"vento.jpeg", precio:"$5500",propietario: "María Allianz",contacto:"2616653045"},{nombre:"Nissan Versa", imagen:"versa.jpeg", precio:"$6000", propietario:" Mario Peña",contacto:"2615624145"},{nombre:"Honda HR-V", imagen:"honda.jpeg", precio:"$5800", propietario:" Esteban Flores",contacto:"2617453157"}];
var contenido = "";
var i = 1;

for (let modelo of vehiculos) {
    contenido += "<div class='col-3 m-5'>";
    contenido += "<div class='card'>";
    contenido += "<div><h4 id='modelo_auto" + i + "' class='text-primary text-center text-white bg-dark'>" + modelo.nombre + "</h4></div>";
    contenido += "<img id='modelo_imagen" + i + "' src='img/" + modelo.imagen + "' class='card-img-top' alt='" + modelo.nombre + "'>";
    contenido += "<div class='card-body'>";
    contenido += "<div class='row'>";
    contenido += "<div class='col-12'><p class='text-white p-1 bg-dark text-center'>El precio por día es de: " +modelo.precio+"</p></div>";
    contenido += "<div class='col-12'><p class='text-white p-1 bg-dark text-center'>Propietario/a: " +modelo.propietario+"</p></div>";
    contenido += "<div class='col-12'><p class='text-white p-1 bg-dark text-center'>Tel. de contacto: " +modelo.contacto+"</p></div>";
    contenido += "</div>";
    contenido += "</div>";
    contenido += "</div>";
    contenido += "</div>";
    i++;
}

var contenedor_modelos = document.getElementById("vehiculos");
contenedor_modelos.innerHTML = contenido;


/* Registro de datos del formulario */

function enviarDatos() {
    var nombre_vehiculo = document.getElementById("nombre").value;
    var patente_vehiculo = document.getElementById("patente").value;
    var turno_vehiculo= document.getElementById("turnos").value;
    var nombre_propietario = document.getElementById("propietario").value;

    localStorage.setItem("datos_formulario", JSON.stringify([nombre_vehiculo, patente_vehiculo, turno_vehiculo, nombre_propietario]));
    var resultadoA = "<p class='text-white bg-dark text-center m-5 p-3'>Su cotización se ha registrado correctamente!</p>";
    document.getElementById("resultado_exitoso").innerHTML = resultadoA;
}

var enviar_datos = document.getElementById("btnPrincipal");
enviar_datos.addEventListener("click", enviarDatos);

function cargarDatos() {
    var datos = JSON.parse(localStorage.getItem("datos_formulario"));
    document.getElementById("nombre").value = datos[0];
    document.getElementById("patente").value = datos[1];
    document.getElementById("turnos").value = datos[2];
    document.getElementById("propietario").value = datos[3];
}

cargarDatos();

$( "#btnPrincipal" ).click(function() {
    alert( "Handler for .click() called." );
  });
