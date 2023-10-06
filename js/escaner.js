const scanner = new Instascan.Scanner({ video: document.getElementById('scanner') });
const contenedor = document.getElementById('contenedor');
const pop = document.querySelector('.popup');
const x = document.querySelector('miaudio');
const resultado = document.getElementById('resultado');
const ingresadosJSON = [{
    "id" : 1,
    "nombre" : "Danery Arriagada ",
    "edad"   : 23,
    "rut"    : "20451773-8"
},
{
    "id" : 2,
    "nombre" : "pepe six ",
    "edad"   : 23,
    "rut"    : "22451773-8"
}
];

console.log("aaqaqa")



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
