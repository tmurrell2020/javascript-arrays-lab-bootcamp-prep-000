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

function appendKitten("Broom") {
  return kittens = [...kittens, "Broom"];

}

// function prependKitten("Arnold") {
//
// }
//
// function removeLastKitten() {
//
// }
//
// function removeFirstKitten() {
//
// }
