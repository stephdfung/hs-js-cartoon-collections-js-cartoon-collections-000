function dwarfRollCall(dwarves){
  var length = dwarves.length;
  var dwarvesList = [];
  for(var i = 0; i < length; i++){
    dwarvesList.push((i + 1) + ". " + dwarves[i] + " ");
  }
  return dwarvesList.join("");
}

function summonCaptainPlanet(planeteerCalls){
  var elements = [];
  for(var i = 0; i < planeteerCalls.length; i++){
    elements.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return elements;
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++){
    if(words[i].length > 4) {
      return true;}
      else {
        return false;
      }
    }
  }


function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar") {
      return foods[i];
    }
  }
    if(foods !== "cheddar:") {
      return "no cheese!";
  }
}
