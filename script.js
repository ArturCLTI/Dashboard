//document.getElementById("personagens").innerHTML = 22;
const personagenscontador = document.querySelector("#personagens");
const luacontador = document.querySelector("#luas");
const planetascontador = document.querySelector("#planetas");
const navescontador = document.querySelector("#naves");

/* async function swapiGet(params) {
  const response = await fetch(`https://swapi.dev/api/${params}`);
  const data = await response.json();
  console.log(response);
  `${response[0].count}`;
  `${response[1].count}`;
  `${response[2].count}`;
  `${response[3].count}`;
  return data;
}

 function repassandoValores() {
  
  const countPessoas =  swapiGet("people");
  personagenscontador.innerHTML = `${response[0].count}`;

  const countLuas =  swapiGet("vehicles");
  luacontador.innerHTML = `${response[1].count}`;

  const countPlanets =  swapiGet("planets");
  planetascontador.innerHTML = `${response[2].count}`;

  const countNaves =  swapiGet("starships");
  navescontador.innerHTML = `${response[3].count}`;
  Promise.all([countPessoas, countLuas, countPlanets, countNaves]).then(response => console.log(response))

}
repassandoValores(); */

async function swapiGet(params) {
  const response = await fetch(`https://swapi.dev/api/${params}`);
  const data = await response.json();
  console.log(response);

  return data;
}

function repassandoValores() {
  Promise.all([
    swapiGet("people"),
    swapiGet("vehicles"),
    swapiGet("planets"),
    swapiGet("starships"),
  ]).then((response) => {
    personagenscontador.innerHTML = `${response[0].count}`;
    luacontador.innerHTML = `${response[1].count}`;
    planetascontador.innerHTML = `${response[2].count}`;
    navescontador.innerHTML = `${response[3].count}`;
  });
}

repassandoValores();
