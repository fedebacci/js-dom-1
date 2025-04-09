const switchButton = document.getElementById('switchButton');
console.debug('switchButton', switchButton);
const lightBulbImage = document.querySelector('img');
console.debug('lightBulbImage', lightBulbImage);
const lightBulbCSSElement = document.getElementById('bulb');
console.debug('lightBulbCSSElement', lightBulbCSSElement);
const imgWhiteLamp = document.getElementById('imgWhiteLamp');
console.debug('lightBulbCSSElement', lightBulbCSSElement);
const imgYellowLamp = document.getElementById('imgYellowLamp');
console.debug('lightBulbCSSElement', lightBulbCSSElement);
const CSSlightbulb = document.getElementById('CSSlightbulb');
console.debug('lightBulbCSSElement', lightBulbCSSElement);

switchButton.addEventListener('click', function() {
    switchLight(switchButton, lightBulbImage, lightBulbCSSElement, imgWhiteLamp, imgYellowLamp, CSSlightbulb)
});

function switchLight(button, image, CSSelement, imgWhite, imgYellow, CSSlightbulb) {
    // console.debug('button', button);
    // console.debug('image', image);
    // console.debug('CSSelement', CSSelement);
    // console.debug('imgWhite', imgWhite);
    // console.debug('imgYellow', imgYellow);
    // console.debug('CSSlightbulb', CSSlightbulb);

    if (image.src.includes('white')) {
        console.info("Accendo")
        image.src = './assets/img/yellow_lamp.png';
        image.alt = 'Lampadina accesa';
        CSSelement.style.backgroundColor = 'yellow';
        CSSelement.style.boxShadow = '0 0 5rem 1px rgba(255, 255, 0, 1)';
        button.innerText = 'Spegni le lampadine';
    } else {
        console.info("Spengo")
        image.src = './assets/img/white_lamp.png';
        image.alt = 'Lampadina spenta';
        CSSelement.style.backgroundColor = 'white';
        CSSelement.style.boxShadow = '0 0 2rem 1px rgba(0,0,0,0.25)';
        button.innerText = 'Accendi le lampadine';
    };

    imgWhite.classList.toggle('d-none');
    imgYellow.classList.toggle('d-none');
    CSSlightbulb.classList.toggle('lit');
};