var imageDetails = [
    { path:"images/Docked.jpg", caption:"Cobra docked at an orbital outpost" },
    { path:"images/EarlyMorning.jpg", caption:"Early morning above Europe" },
    { path:"images/EuropaVista.jpg", caption:"Looking out over the canyons of Europa" },
    { path:"images/NightTimeLanding.jpg", caption:"A night time excursion" },
    { path:"images/Srv.jpg", caption:"Joy riding in my SRV" },
    { path:"images/SrvAndShip.jpg", caption:"Exploring a remote planetary landscape" }
];

var currentImage = 0;

function setImage(index) {
    viewerImg.src = imageDetails[index].path;
    var caption = document.querySelector(".viewer .caption");
    caption.innerText = imageDetails[index].caption;
}

function advanceSlide(offset) {
    var nextImage = currentImage + offset;
    if (nextImage < 0) {
        nextImage = imageDetails.length - 1;
    }
    else if (nextImage >= imageDetails.length) {
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
