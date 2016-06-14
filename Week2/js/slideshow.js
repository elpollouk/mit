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
    var caption = document.querySelector(".viewer .caption");
    caption.innerText = `Slide ${index+1}/${imagePaths.length}`;
}

function advanceSlide(offset) {
    var nextImage = currentImage + offset;
    if (nextImage < 0) {
        nextImage = imagePaths.length - 1;
    }
    else if (nextImage >= imagePaths.length) {
        nextImage = 0;
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
