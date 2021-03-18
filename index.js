function randomAirSound() {
  let airSounds = [
    "flutter",
    "fisst",
    "fwoosh",
    "gasp",
    "swish",
    "swoosh",
    "waft",
    "whiff",
    "whoosh",
    "whizz",
    "whip",
  ];

  let index = Math.floor(Math.random() * airSounds.length);

  return airSounds[index];
}

let randomAir = document.querySelector("p");

let btn = document.querySelector("h2");

randomAir.innerHTML = randomAirSound();

btn.addEventListener("click", () => {
  randomAir.innerHTML = randomAirSound();
});
