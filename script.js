//document.getElementById("personagens").innerHTML = 22;
const personagensContador = document.querySelector("#personagens");
const luasContador = document.querySelector("#luas");
const planetasContador = document.querySelector("#planetas");
const navesContador = document.querySelector("#naves");

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

async function drawChart() {
  const response = await swapiGet("vehicles/");
  const vehiclesArray = response.results;
  console.log(vehiclesArray);

  const dataArray = [];
  dataArray.push(["Veículos", "Passageiros"]);
  vehiclesArray.forEach((vehicle) => {
    dataArray.push([vehicle.name, Number(vehicle.passengers)]);
  });

  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    title: "Passageiros",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}

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
  return data;
}

function repassandoValores() {
  Promise.all([
    swapiGet("people"),
    swapiGet("vehicles"),
    swapiGet("planets"),
    swapiGet("starships"),
  ]).then((response) => {
    personagensContador.innerHTML = `${response[0].count}`;
    luasContador.innerHTML = `${response[1].count}`;
    planetasContador.innerHTML = `${response[2].count}`;
    navesContador.innerHTML = `${response[3].count}`;
  });
}
repassandoValores();

async function preenchercatalago() {
  const response = await swapiGet("films");
  const tableData = response.results;
  console.log(tableData);
  console.log(response);
  tableData.forEach((film) => {
    document.querySelector("#preencherTabela").innerHTML += `
      <tr>
        <td>${film.title}</td>
        <td>${film.release_date}</td>
        <td>${film.director}</td>
        <td>${film.episode_id}</td>
      </tr>
    `;
  });
}

preenchercatalago();
