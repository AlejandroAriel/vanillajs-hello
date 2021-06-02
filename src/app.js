/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//----------------------------------------

function getRandomNum() {
  return Math.floor(Math.random() * (12 - 1)) + 1;
}

const cards = ["♦", "♥", "♠", "♣"];

function getRandomCard(arr) {
  return arr[Math.floor(Math.random() * (arr.length - 0)) + 0];
}

window.onload = function() {
  document.querySelector(".number").innerHTML = getRandomNum();
  let signo = document.querySelectorAll(".sign");
  var lala = getRandomCard(cards);
  for (var i = 0; i < signo.length; i++) {
    signo[i].innerHTML = lala;
  }

  document.getElementById("boton").addEventListener("click", function() {
    document.querySelector(".number").innerHTML = getRandomNum();
    let signo = document.querySelectorAll(".sign");
    var lala = getRandomCard(cards);
    for (var i = 0; i < signo.length; i++) {
      signo[i].innerHTML = lala;
    }
  });
};
