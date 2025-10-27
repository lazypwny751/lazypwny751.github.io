const images = [
  "before-muffet.png",
  "muffet-home-door.png"
];

const randomIndex = Math.floor(Math.random() * images.length);
document.body.style.backgroundImage = `url('assets/background/${images[randomIndex]}')`;
