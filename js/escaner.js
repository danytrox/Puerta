const scanner = new Instascan.Scanner({ video: document.getElementById('scanner') });
const contenedor = document.getElementById('contenedor');
const pop = document.querySelector('.popup');
const x = document.querySelector('miaudio');
const resultado = document.getElementById('resultado');
datospersona();

function datospersona(){

const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'js/personas.json', true);
xhttp.send();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let ingresadosJSON = JSON.parse(this.responseText);



scanner.addListener('scan', function (contenidoQR) {
    const qr =parseInt(contenidoQR);

    const findPerson = ingresadosJSON.find(persona=>persona.id === qr )
    
    console.log(findPerson)
    if (findPerson) {
        // Mostrar los datos de la persona encontrada
        pop.classList.toggle("spread");
        console.log("Nombre: ",findPerson.nombre,"Rut: ", findPerson.rut)
        resultado.textContent ="Nombre: "+ findPerson.nombre + " Rut: " + findPerson.rut;
        setTimeout(() => {
            resultado.textContent = '';
            pop.classList.toggle("spread") //agrega spread a la clase pop para que este aparezca
        }, 5000);
        
    } else {
        alert("QR no reconocido");
        alert(contenidoQR)
    }
     //Limpia el resultado después de unos segundos

});
Instascan.Camera.getCameras().then(cameras => {
    if (cameras.length > 0) {
        scanner.start(cameras[0]);
        
    } else {
        console.error('No se encontraron cámaras disponibles.');
    }
}).catch(err => {
    console.error(err);
});
    }
}
}











