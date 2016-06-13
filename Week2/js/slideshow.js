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

function advanceSlide(offset) {
    var nextImage = currentImage + offset;
    if (nextImage < 0 || nextImage >= imagePaths.length) {
        return;
    }

    currentImage = nextImage;
    setImage(currentImage);
}

function main() {
    console.log("Hello World!");

    setImage(currentImage);
}

function previousButtonClicked() {
    advanceSlide(-1);
}

function nextButtonClicked() {
    advanceSlide(1);
}
