/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
var pronoun = ["the", "our", "your"];

var adj = ["great", "big", "genius"];

var noun = ["puedes", "telecom", "virus"];

var domain = ["com", "es", "us"];

//var getRandomPronoun = pronoun(Math.floor(Math.random) * 10);
//var getRandomAdj = pronoun(Math.floor(Math.random) * 10);
//var getRandomNoun = pronoun(Math.floor(Math.random) * 10);
function domainGenerator(pronoun, adj, noun) {
  for (var i = 0; i < pronoun.length; i++) {
    for (var a = 0; a < adj.length; a++) {
      for (var e = 0; e < noun.length; e++) {
        for (var d = 0; d < domain.length; d++) {
          console.log(pronoun[i] + adj[a] + noun[e] + "." + domain[d]);
        }
      }
    }
  }
}

console.log(domainGenerator(pronoun, adj, noun, domain));
//};
