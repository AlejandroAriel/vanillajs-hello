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

//var llamado = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function getRandomNum() {
  var num = Math.floor(Math.random() * (14 - 1)) + 1;
  if (num === 11) {
    return "J";
  } else if (num === 12) {
    return "Q";
  } else if (num === 13) {
    return "K";
  } else {
    return num;
  }
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
