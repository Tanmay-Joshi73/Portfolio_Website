const ctx = document.getElementById('myChart');

// Array of chart types to cycle through
const chartTypes = ['bar', 'doughnut', 'line', 'polarArea', 'pie'];
let currentIndex = 0;
let length=chartTypes.length
// Initialize the Chart with the first type
let myChart = new Chart(ctx, {
    type: chartTypes[currentIndex],
    data: {
        labels: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'React', 'MongoDB'],
        datasets: [{
            label: 'Skill Proficiency',
            data: [85, 90, 80, 75, 70, 60],
            backgroundColor: [
                '#7091E6',    // Color for JavaScript
                '#36A2EB',    // Color for HTML
                '#66FCF1',    // Color for CSS
                '#F76C6C',    // Color for Node.js
                '#F172A1',    // Color for React
                '#FF9F40'     // Color for MongoDB
            ],
            borderColor: 'whitesmoke',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    padding: 20,
                    font: {
                        size: 14,
                        family: 'Arial'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                padding: 12
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuart'
        }
    }
});

// Function to update chart type
function updateChartType() {
  myChart.destroy()
    currentIndex++;
    console.log(currentIndex,length)
    if(currentIndex>length-1){
        currentIndex=0
        console.log('it is not bigger then the length')
        console.log(currentIndex)
    }
    let CurrentGraphIndex=currentIndex
    let value=false
    let value2=false
    if(chartTypes[currentIndex]=='bar' || chartTypes[currentIndex]==='line'){
        value=true
        value2=true
    }
    console.log(value,value2)
    displayChart(CurrentGraphIndex,value,value2)

}

// Set interval to change the chart type every 10 seconds
setInterval(updateChartType, 6000);


function displayChart(index,value,value2){
    myChart.config._config.type=chartTypes[index]
    console.log(myChart.config._config.type)
    myChart=new Chart(ctx, {
        type: chartTypes[index],
        data: {
            labels: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'React', 'MongoDB'],
            datasets: [{
                label: 'Skill Proficiency',
                data: [85, 90, 80, 75, 70, 60],
                backgroundColor: [
                    '#7091E6',    // Color for JavaScript
                    '#36A2EB',    // Color for HTML
                    '#66FCF1',    // Color for CSS
                    '#F76C6C',    // Color for Node.js
                    '#F172A1',    // Color for React
                    '#FF9F40'     // Color for MongoDB
                ],
                borderColor: 'whitesmoke',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    display: value2  // Hides the y-axis
                },
                x: {
                    display: value   // Keeps the x-axis visible (optional)
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 14,
                            family: 'Arial'
                        }
                    }
                },
                
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 12
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    });
}
