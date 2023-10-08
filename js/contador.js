// Obtener la fecha actual y agregar 2 horas
const startDate = new Date();
startDate.setSeconds(startDate.getSeconds() + 10);
const endDate = startDate.getTime();
const pop = document.querySelector('.popup');

// Actualizar la cuenta regresiva cada segundo
const countdown = setInterval(function () {
const now = new Date().getTime();
const timeLeft = endDate - now;

// Calcular las horas, minutos y segundos restantes
const hours = Math.floor(timeLeft / (1000 * 60 * 60));
const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

// Actualizar los elementos HTML con los valores calculados
document.getElementById("hours").textContent = String(hours).padStart(2, '0');
document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

    // Cuando la cuenta regresiva llega a cero, detener el intervalo y mostrar un mensaje
if (timeLeft <= 0) {
    clearInterval(countdown);
    document.getElementById("imagenQr").style.visibility = "hidden";
    document.getElementById("hours").textContent = String("00");
    document.getElementById("minutes").textContent = String("00");
    document.getElementById("seconds").textContent = String("00");
    pop.classList.toggle("spread");
}
}, 200);