window.addEventListener("load", init);
function init() {
  const KEPEK = [
    "kepek/DSC7025.jpg",
    "kepek/DSC7365.jpg",
    "kepek/DSC7444.jpg",
    "kepek/DSC7515.jpg",
    "kepek/DSC73711.jpg",
  ];

  const GALERIA = document.querySelector("article");

  for (i = 0; i < KEPEK.length; i++) {
    GALERIA.innerHTML += `<img src="${KEPEK[i]}" alt="kép">`;
  }
  const BAL_GOMB = document.querySelector(".bal");
  const JOBB_GOMB = document.querySelector(".jobb");
  BAL_GOMB.addEventListener("click", vissza_lep);
  JOBB_GOMB.addEventListener("click", elore_lep);

  const KISKEP = document.querySelectorAll("article img");
  console.log(KISKEP);
  for (let i = 0; i < KEPEK.length; i++) {
    KISKEP[i].addEventListener("click", kattintasKezelo);
  }
}

function elore_lep() {}
function vissza_lep() {}
function kattintasKezelo(event) {
  const NAGY_KEP = document.querySelectorAll("section div img");
  console.log(NAGY_KEP);
  NAGY_KEP[0].src = event.target.src ;
  console.log(event.target);
  console.log(event.target.src);
}

const images = document.querySelectorAll(".hoverable");

images.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.border = "5px solid lightgreen";
  });

  img.addEventListener("mouseout", () => {
    img.style.border = "none";
  });
});
