/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//----------------------------------------

function CambioColor(element, x) {
  if (element == "♦" || element == "♥") {
    x.classList.remove("negro");
    x.classList.add("rojo");
  } else {
    x.classList.remove("rojo");
    x.classList.add("negro");
  }
}

function getRandomNum() {
  return Math.floor(Math.random() * (12 - 1)) + 1;
}

const cartas = { diamante: "♦", corazones: "♥", picas: "♠", trebol: "♣" };

var randomProperty = function(obj) {
  var keys = Object.keys(obj);
  var result = obj[keys[(keys.length * Math.random()) << 0]];
  return result;
};

window.onload = function() {
  document.querySelector(".number").innerHTML = getRandomNum();
  let signo = document.querySelectorAll(".sign");
  var cards = randomProperty(cartas);
  for (var i = 0; i < signo.length; i++) {
    signo[i].innerHTML = cards;
    CambioColor(cards, signo[i]);
  }

  document.getElementById("boton").addEventListener("click", function() {
    document.querySelector(".number").innerHTML = getRandomNum();
    let signo = document.querySelectorAll(".sign");
    var cards = randomProperty(cartas);
    for (var i = 0; i < signo.length; i++) {
      signo[i].innerHTML = cards;
      CambioColor(cards, signo[i]);
    }
  });
};
