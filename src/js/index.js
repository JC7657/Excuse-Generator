/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log(randomExcuse());
};

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function randomExcuse() {
  let randomWho = Math.floor(Math.random() * who.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  let RandomExcuse =
    who[randomWho] + " " + what[randomWhat] + " " + when[randomWhen];
  return RandomExcuse;
}

document.getElementById("rmb").innerHTML = randomExcuse();