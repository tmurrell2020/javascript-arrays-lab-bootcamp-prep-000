var kittens = ["Milo", "Otis", "Garfield"] //define your array here
// Add your functions and code here
function destructivelyAppendKitten() {
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten() {
  kittens.unshift('Bob');
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop("Garfield");
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift("Milo");
  return kittens;
}

function appendKitten(newKittens) {
  newKittens = [...kittens, "Broom"];
  return newKittens;
}

function prependKitten(newKittens) {
  newKittens = ["Arnold", ...kittens];
  return newKittens;
}
//
// function removeLastKitten() {
//
// }
//
// function removeFirstKitten() {
//
// }
