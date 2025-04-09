const switchButton = document.getElementById('switchButton');
console.debug('switchButton', switchButton);
const lightBulbImage = document.querySelector('img');
console.debug('lightBulbImage', lightBulbImage);

switchButton.addEventListener('click', function() {
    switchLight(switchButton, lightBulbImage)
});

function switchLight() {
    console.debug('switchButton', switchButton);
    console.debug('lightBulbImage', lightBulbImage);

    if (lightBulbImage.src.includes('white')) {
        lightBulbImage.src = './assets/img/yellow_lamp.png';
        lightBulbImage.alt = 'Lampadina accesa';
        switchButton.innerText = 'Spegni la lampadina';
        // console.debug('switchButton DOPO', switchButton);
    } else {
        lightBulbImage.src = './assets/img/white_lamp.png';
        lightBulbImage.alt = 'Lampadina spenta';
        switchButton.innerText = 'Accendi la lampadina';
        // console.debug('switchButton DOPO', switchButton);
    };
};