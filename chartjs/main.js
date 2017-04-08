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
                backgroundColor: "rgba(226,227,246,.6)",
                borderColor: "#C7C9E9",
                borderJoinStyle: 'miter',
                pointBorderColor: "#C7C9E9",
                pointBackgroundColor: "rgba(226,227,246,1)",
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                pointRadius: 7,
                pointHitRadius: 10,
                bezierCurve: false,
                scaleOverride: true,
                scaleSteps: 5,
                scaleStepWidth: 500,
                scaleStartValue: 0,
                data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
                spanGaps: true,
        }
    ]
    },

    animation: {
        animateScale: true
    },
    options: {
        legend: {
            display: false
        },
        aspectRatio: {
            maintainAspectRatio: true
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
                    stepSize: 500
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
        labels: ['S', 'M', 'T', 'W', 'R', 'F', 'S'],
        datasets: [
            {
                label: 'Morning',
                data: [50, 100, 175, 125, 225, 200, 100],
                backgroundColor: '#7477BF'
            },
            {
                label: 'Afternoon',
                data: [75, 150, 50, 200, 175, 100, 125],
                backgroundColor: '#73b0be'
            }
            ]
    },
    options: {
        legend: {
            display: false,
            labels: {
                padding: 50,
            }
        },

        layout: {
            padding: 0,
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

        }
    }
});

// Pie Chart

const PIE = document.getElementById("mobilechart").getContext("2d");
var mobileChart = new Chart(PIE, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktops', 'Laptops'],
        datasets: [
            {
                data: [35, 20, 15, 30],
                backgroundColor: ['#73b0be', '#7EBEA2', '#7477BF', '#6699ff'],
            }
            ]
    },

    options: {
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontFamily: "'Lato', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                fontSize: 20,
                boxWidth: 20,
                boxHeight: 30
            }
        }
    }
});

// Dropdown Notification

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
};

// Form Validation

function validateForm() {

    var a = document.forms["messageForm"]["userSearch"].value;
    var b = document.forms["messageForm"]["message"].value;

    if (a == null || a == "", b == null || b == "") {
        alert("Please fill out all fields.");
        return false;
    }
}
