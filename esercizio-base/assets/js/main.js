const btnTurnOn = document.getElementById('turnOn');
console.debug('btnTurnOn', btnTurnOn);

btnTurnOn.addEventListener('click', () => {
    const lightBulbImage = document.querySelector('img');
    console.debug('lightBulbImage', lightBulbImage);
    lightBulbImage.src = './assets/img/yellow_lamp.png';
    lightBulbImage.alt = 'Lampadina accesa';

    btnTurnOn.classList.add('d-none')
});