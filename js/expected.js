  const graph = document.getElementById("graph").getContext("2d");
  Chart.defaults.global.defaultFontSize = 18;
  
  let massPopChart = new Chart(graph, {
    type: "bar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      datasets: [{
          label: "Moyenne Ponderee",
          data: [4.8, 4.2, 3.6, 3.8, 4.6],
          order: 5,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          hoverBorderWidth: 3,
        }, {
          type: "line",
          label: "Your Score",
          data: [3,2,1,3,2],
          order: 1,
          borderColor: 'rgb(29, 197, 173)',
          hoverBorderWidth: 50,
        }],
      labels: ["Work","Finance","Social","Leisure","Health"]
    },
    options: {
      title: {
        display: true,
        text: "Test",
        fontSize: 24,
      },
      legend: {
        display: true,
      },
      // start at 0
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      layout: {
        padding: {
          left: 100,
          right: 100,
          top: 50,
        },
      },
    },
  });