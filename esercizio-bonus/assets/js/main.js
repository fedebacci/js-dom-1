const switchButton = document.getElementById('switchButton');
// console.debug('switchButton', switchButton);

switchButton.addEventListener('click', (switchButton) => {
    const lightBulbImage = document.querySelector('img');
    // console.debug('lightBulbImage', lightBulbImage);
    // console.debug('switchButton', switchButton);
    
    if (lightBulbImage.src.includes('white')) {
        lightBulbImage.src = './assets/img/yellow_lamp.png';
        lightBulbImage.alt = 'Lampadina accesa';
        switchButton.target.innerText = 'Spegni la lampadina';
        // console.debug('switchButton DOPO', switchButton);
    } else {
        lightBulbImage.src = './assets/img/white_lamp.png';
        lightBulbImage.alt = 'Lampadina spenta';
        switchButton.target.innerText = 'Accendi la lampadina';
        // console.debug('switchButton DOPO', switchButton);
    };
});