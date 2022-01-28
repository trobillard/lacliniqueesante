// Code by Thibaud Robillard
// For La Clinique E-Sante
// Fri 28 Jan 2022


// Declare the Function
// This Function is to bring a Title in our Html using the DOM
function populateHeader() {
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');
  myH1.innerText = 'Test Result'
  header.appendChild(myH1);
}

// Using fetch API to get my data JSON
function updateChart(){
  // Async for asyncronise the fetch fonction
async function fetchData() {
      // Saving the url JSON file in a url const
      const url = "http://localhost:3030/data/data.json";
      // Creating a response of the JSON with await to wait for the response
      const response = await fetch(url)
      // Wait until the request has been completed
      const datapoints = await response.json();
      // To transform my Object into an Array and get the Key:Value
      const arr = Object.entries(datapoints);
      // Checking the response
      console.log(arr);
      // Returning the response
      return arr;
}

// This fonction is to get the data that we need for the chart
fetchData().then(datapoints => {
    // This part is not working
      const ponderation = datapoints.ponderation.map(
        function(index){
          return index.ponderation;
        })
      console.log(arr);
      // Get my categories on the x axes
      myChart.config.data.labels = arr;
      myChart.update();
    })
  }

// Code to use ChartJS
// Use the DOM  
const ctx = document.getElementById('myChart').getContext('2d');
// Create a new CHART
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'Moyenne Ponderee',
            data: [4.8, 4.2, 3.6, 3.8, 4.6],
            order: 5,borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            hoverBorderWidth: 3,
        }]
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
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        Layout: {
          padding: {
            left: 100,
            right: 100,
            top: 50,
          },
        },
    }
});