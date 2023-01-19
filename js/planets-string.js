(function () {
  "use strict";

  var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
  var planetsArray;

  // TODO: Convert planetsString to an array, save it to planetsArray.
  planetsArray = planetsString.split("|");

  console.log(planetsArray);

  // TODO: Create a string with <br> tags between each planet. console.log() your results.
  //       Why might this be useful?
  const string = planetsArray.join("<br>");
  console.log(string);
  document.body.innerHTML += string;
  // Bonus: Create a second string that would display your planets in an undordered list.
  //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
  //        console.log() your results.

  let stringPlanet = "";
  planetsArray.forEach((planet) => (stringPlanet += `<li>${planet}</li>`));
  const planetList = `<ul>${stringPlanet}</ul>`;
  console.log(planetList);
})();
