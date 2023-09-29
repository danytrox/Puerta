const scanner = new Instascan.Scanner({ video: document.getElementById('scanner') });
const contenedor = document.getElementById('contenedor');
const pop = document.querySelector('.popup');
const x = document.querySelector('miaudio')


scanner.addListener('scan', function (contenidoQR) {
    const resultado = document.getElementById('resultado');
    resultado.textContent =contenidoQR;
    pop.classList.toggle("spread");

    if(contenidoQR == "SMURF CAT"){
        alert ("smurfing")
        var x = document.getElementById("miaudio")
        x.play();
        
    }
    
    
    
    // Limpia el resultado después de unos segundos
   setTimeout(() => {
        resultado.textContent = '';
        pop.classList.toggle("spread")
    }, 5000);
    
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
