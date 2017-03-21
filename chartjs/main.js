// Line Chart

const CHART = document.getElementById("lineChart");

let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
    labels: ["16-22", "23-29", "10-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [
        {
            fill: true,
            lineTension: 0,
            backgroundColor: "#9094fe",
            borderColor: "purple",
            borderJoinStyle: 'miter',
            pointBorderColor: "purple",
            pointBackgroundColor: "#9094fe",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointRadius: 7,
            pointHitRadius: 10,
            data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
            spanGaps: true,
        }
    ]
  }, 
    options: {
        legend: {
           display: false 
        },
        scales: {
            xAxes: [{
               gridLines: {
                   offsetGridLines: true
               } 
            }],
            yAxes: [{
                gridLines: {
                   drawTicks: false
               }, 
                ticks: {
                    max: 2500,
                    min: 0,
                    stepSize: 500,
                    beginAtZero: true
                }
            }]
        }
    }
});

// Bar Graph

    const GRAPH = document.getElementById("bargraph").getContext("2d");
    let barGraph = new Chart(GRAPH, {
        type: 'bar',
        data: {
            labels: ['S','M','T','W','R','F','S'],
            datasets: [
            {    label: 'Morning',
                data: [50,100,175,125,225,200,100],
                backgroundColor: '#7477BF'
            },
            {    label: 'Afternoon',
                data: [75,150,50,200,175,100,125],
                backgroundColor: '#73b0be'
            }
            ]
        },
        options: {
            legend: {
                display: false 
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    ticks: {
                        max: 250,
                        min: 0,
                        stepSize: 50
                    },
                    gridLines: {
                        drawTicks: false,
                        color: '#cdcdcd'
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawTicks: false,
                        color: '#cdcdcd'
                    }
                }]
            }
        }
});

// Pie Chart

const PIE = document.getElementById("mobilechart").getContext("2d");
    var mobileChart = new Chart(PIE, {
        type: 'doughnut',
        data: {
            labels: ['Phones','Tablets','Desktops','Consoles','Laptops'],
            datasets: [
            {
                data: [30,20,15,5,30],
                backgroundColor: ['#73b0be','#7EBEA2','#7477BF','#4c4b71','#6699ff'],
                hoverBackgroundColor: ['','','','','']
            }
            ]},
        
        options: {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            legend: {
                display: false
            }
        }
});