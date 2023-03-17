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
  let currentindex = 0;
  const NAGY_KEP = document.querySelector(".nagykep img");
  function elore_lep() {
    if (currentindex < KEPEK.length - 1) {
      currentindex++;
      NAGY_KEP.src = KEPEK[currentindex];
    } else {
      currentindex = 0;
      NAGY_KEP.src = KEPEK[currentindex];
    }
  }
  function vissza_lep() {
    if (currentindex > 0) {
      currentindex--;
      NAGY_KEP.src = KEPEK[currentindex];
    } else if (currentindex == 0) {
      currentindex = KEPEK.length - 1;
      NAGY_KEP.src = KEPEK[currentindex];
    }
  }
  function osszehasonlit() {
    const KISKEP = document.querySelectorAll("article img");
    KISKEP.forEach((img) => {
      if (img === selectedImg) {
        img.classList.add("selected");
      } else {
        img.classList.remove("selected");
      }
    });
  }
}

function kattintasKezelo(event) {
  const NAGY_KEP = document.querySelectorAll("section div img");
  console.log(NAGY_KEP);
  NAGY_KEP[0].src = event.target.src;
  console.log(event.target);
  console.log(event.target.src);
  osszehasonlit(event.target)
}
