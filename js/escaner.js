const scanner = new Instascan.Scanner({ video: document.getElementById('scanner') });

scanner.addListener('scan', function (contenidoQR) {
    document.getElementById('resultado').textContent =contenidoQR;
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