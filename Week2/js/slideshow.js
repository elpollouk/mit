var imagePaths = [
    "images/Docked.jpg",
    "images/EarlyMorning.jpg",
    "images/EuropaVista.jpg",
    "images/NightTimeLanding.jpg",
    "images/Srv.jpg",
    "images/SrvAndShip.jpg"
];

function setImage(index) {
    viewerImg.src = imagePaths[index];
}

function main() {
    console.log("Hello World!");

    setImage(0);
}
