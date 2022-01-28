// Code by Thibaud Robillard
// For La Clinique E-Sante
// Fri 28 Jan 2022
// In this version we don't work with a JSON file but we bring the JSON into a var
var dataPoint =  [];
var data = {
  "work": [
    {
      "id": 1,
      "ponderation": 3,
      "valeurReponseA": 0,
      "valeurReponseB": 1,
      "choixPatient": "A",
      "valeurChoix": 0
    },
    {
      "id": 2,
      "ponderation": 6,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "A",
      "valeurChoix": 1
    },
    {
      "id": 3,
      "ponderation": 4,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "A",
      "valeurChoix": 1
    },
    {
      "id": 4,
      "ponderation": 3,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "B",
      "valeurChoix": 0
    },
    {
      "id": 5,
      "ponderation": 8,
      "valeurReponseA": 0,
      "valeurReponseB": 1,
      "choixPatient": "B",
      "valeurChoix": 1
    }
  ],
  "finance": [
    {
      "id": 1,
      "ponderation": 2,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "A",
      "valeurChoix": 1
    },
    {
      "id": 2,
      "ponderation": 9,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "B",
      "valeurChoix": 0
    },
    {
      "id": 3,
      "ponderation": 6,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "A",
      "valeurChoix": 1
    },
    {
      "id": 4,
      "ponderation": 3,
      "valeurReponseA": 0,
      "valeurReponseB": 1,
      "choixPatient": "B",
      "valeurChoix": 1
    },
    {
      "id": 5,
      "ponderation": 1,
      "valeurReponseA": 0,
      "valeurReponseB": 1,
      "choixPatient": "B",
      "valeurChoix": 1
    }
  ],
  "social": [
    {
      "id": 1,
      "ponderation": 1,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "A",
      "valeurChoix": 1
    },
    {
      "id": 2,
      "ponderation": 4,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "A",
      "valeurChoix": 1
    },
    {
      "id": 3,
      "ponderation": 3,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "A",
      "valeurChoix": 1
    },
    {
      "id": 4,
      "ponderation": 3,
      "valeurReponseA": 0,
      "valeurReponseB": 1,
      "choixPatient": "A",
      "valeurChoix": 0
    },
    {
      "id": 5,
      "ponderation": 7,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "B",
      "valeurChoix": 0
    }
  ],
  "leisure": [
    {
      "id": 1,
      "ponderation": 3,
      "valeurReponseA": 0,
      "valeurReponseB": 1,
      "choixPatient": "B",
      "valeurChoix": 1
    },
    {
      "id": 2,
      "ponderation": 2,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "A",
      "valeurChoix": 1
    },
    {
      "id": 3,
      "ponderation": 1,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "A",
      "valeurChoix": 1
    },
    {
      "id": 4,
      "ponderation": 6,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "A",
      "valeurChoix": 1
    },
    {
      "id": 5,
      "ponderation": 7,
      "valeurReponseA": 0,
      "valeurReponseB": 1,
      "choixPatient": "B",
      "valeurChoix": 1
    }
  ],
  "health": [
    {
      "id": 1,
      "ponderation": 2,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "A",
      "valeurChoix": 1
    },
    {
      "id": 2,
      "ponderation": 2,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "A",
      "valeurChoix": 1
    },
    {
      "id": 3,
      "ponderation": 8,
      "valeurReponseA": 0,
      "valeurReponseB": 1,
      "choixPatient": "B",
      "valeurChoix": 1
    },
    {
      "id": 4,
      "ponderation": 4,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "B",
      "valeurChoix": 0
    },
    {
      "id": 5,
      "ponderation": 7,
      "valeurReponseA": 1,
      "valeurReponseB": 0,
      "choixPatient": "B",
      "valeurChoix": 0
    }
  ]
};

// Creation of a new graph with CanvasJS
var chart = new CanvasJS.Chart("chartContainer", {
  title:{
    text: "Moyenne Ponderee"
  },
  data: [{ 
    dataPoints: dataPoint
  }]
});

// Select our data usinh a loop for
var sum = 0;
for (var key in data) {
	sum = 0;
  if (data.hasOwnProperty(key)) {
    dataPoint.push({label: key})
    for(var i = 0; i < data[key].length; i++){
      sum = sum + data[key][i]["ponderation"];
    }
    dataPoint[dataPoint.length-1].y = sum/5;
  }
}
// Display our chart
chart.render();