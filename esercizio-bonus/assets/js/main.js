const switchButton = document.getElementById('switchButton');
console.debug('switchButton', switchButton);
const lightBulbImage = document.querySelector('img');
console.debug('lightBulbImage', lightBulbImage);
const lightBulbCSSElement = document.getElementById('bulb');
console.debug('lightBulbCSSElement', lightBulbCSSElement);

switchButton.addEventListener('click', function() {
    switchLight(switchButton, lightBulbImage, lightBulbCSSElement)
});

function switchLight(button, image, CSSelement) {
    // console.debug('button', button);
    // console.debug('image', image);
    // console.debug('CSSelement', CSSelement);

    if (image.src.includes('white')) {
        console.info("Accendo")
        image.src = './assets/img/yellow_lamp.png';
        image.alt = 'Lampadina accesa';
        CSSelement.style.backgroundColor = 'yellow';
        CSSelement.style.boxShadow = '0 0 5rem 1px rgba(255, 255, 0, 1)';
        button.innerText = 'Spegni la lampadina';
    } else {
        console.info("Spengo")
        image.src = './assets/img/white_lamp.png';
        image.alt = 'Lampadina spenta';
        CSSelement.style.backgroundColor = 'white';
        CSSelement.style.boxShadow = '0 0 2rem 1px rgba(0,0,0,0.25)';
        button.innerText = 'Accendi la lampadina';
    };
};