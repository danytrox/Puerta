const scanner = new Instascan.Scanner({ video: document.getElementById('scanner') });
const contenedor = document.getElementById('contenedor');
const pop = document.querySelector('.popup');
const x = document.querySelector('miaudio');
const resultado = document.getElementById('resultado');
const titulo = document.getElementById('titulo');

const btn = document.getElementById('btn');

datospersona();
const verpersona = document.querySelector('.tablapersonas');
btn.addEventListener('click', verPersonas);
document.getElementById('btn2').addEventListener('click', function(){
    window.location.href = "main.html";
});

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
        if (findPerson.id === 12) {
            titulo.textContent = "invitado de ";
            console.log("invitado de ",findPerson.nombre)
        }
        if (findPerson.id != 12) {
            titulo.textContent = "Persona encontrada";
        }
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

function verPersonas(){
    verpersona.classList.toggle("spread");
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'js/personas.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let ingresadosJSON = JSON.parse(this.responseText);
            console.log(ingresadosJSON);
            let res = document.querySelector('#res');
            res.innerHTML = '';
            for(let item of ingresadosJSON){
                console.log(item.nombre);
                res.innerHTML += `

                <tr>
                    <td>${item.id}</td>
                    <td>${item.nombre}</td>
                    <td>${item.rut}</td>
                </tr>
                `
            }
        }
    }
}









