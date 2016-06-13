var imagePaths = [
    "images/Docked.jpg",
    "images/EarlyMorning.jpg",
    "images/EuropaVista.jpg",
    "images/NightTimeLanding.jpg",
    "images/Srv.jpg",
    "images/SrvAndShip.jpg"
];

var currentImage = 0;

function setImage(index) {
    viewerImg.src = imagePaths[index];
}

function main() {
    console.log("Hello World!");

    setImage(currentImage);
}

function previousButtonClicked() {
    currentImage--;
    setImage(currentImage);
}

function nextButtonClicked() {
    currentImage++;
    setImage(currentImage);
}
