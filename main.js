const images = [
  "before-muffet.gif",
  "muffet-door.gif"
];

const randomIndex = Math.floor(Math.random() * images.length);
document.body.style.backgroundImage = `url('assets/background/${images[randomIndex]}')`;
