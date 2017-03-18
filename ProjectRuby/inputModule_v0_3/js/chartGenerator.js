

var ctx = document.getElementById("myChart");

var myChart = undefined;
    
function createChart(cLabels,cData) {

    if (myChart !== undefined)
    {
        myChart.destroy();
    }


    console.log(myChart);

    myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: cLabels,
            datasets: [{
                data: cData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 182, 193, 0.2)',
                    'rgba(238, 58, 140, 0.2)',
                    'rgba(218, 112, 214, 0.2)',
                    'rgba(238, 122, 233, 0.2)',
                    'rgba(209, 95, 238, 0.2)',
                    'rgba(178, 58, 238, 0.2)',
                    'rgba(145, 44, 238, 0.2)',
                    'rgba(65, 105, 225, 0.2)',
                    'rgba(100, 149, 237, 0.2)',
                    'rgba(30, 144, 255, 0.2)',
                    'rgba(99, 184, 255, 0.2)',
                    'rgba(51, 161, 201, 0.2)',
                    'rgba(135, 206, 250, 0.2)',
                    'rgba(0, 197, 205, 0.2)',
                    'rgba(150, 205, 205, 0.2)',
                    'rgba(0, 139, 139, 0.2)',
                    'rgba(0, 250, 154, 0.2)',
                    'rgba(78, 238, 148, 0.2)',
                    'rgba(0, 201, 87, 0.2)',
                    'rgba(124, 252, 0, 0.2)',
                    'rgba(192, 255, 62, 0.2)',
                    'rgba(255, 215, 0, 0.2)',
                    'rgba(238, 180, 34, 0.2)',
                    'rgba(255, 140, 0, 0.2)'

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 182, 193, 1)',
                    'rgba(238, 58, 140, 1)',
                    'rgba(218, 112, 214, 1)',
                    'rgba(238, 122, 233, 1)',
                    'rgba(209, 95, 238, 1)',
                    'rgba(178, 58, 238, 1)',
                    'rgba(145, 44, 238, 1)',
                    'rgba(65, 105, 225, 1)',
                    'rgba(100, 149, 237, 1)',
                    'rgba(30, 144, 255, 1)',
                    'rgba(99, 184, 255, 1)',
                    'rgba(51, 161, 201, 1)',
                    'rgba(135, 206, 250, 1)',
                    'rgba(0, 197, 205, 1)',
                    'rgba(150, 205, 205, 1)',
                    'rgba(0, 139, 139, 1)',
                    'rgba(0, 250, 154, 1)',
                    'rgba(78, 238, 148, 1)',
                    'rgba(0, 201, 87, 1)',
                    'rgba(124, 252, 0, 1)',
                    'rgba(192, 255, 62, 1)',
                    'rgba(255, 215, 0, 1)',
                    'rgba(238, 180, 34, 1)',
                    'rgba(255, 140, 0, 1)'




                ],
                borderWidth: 1
            }]
        },
        options: {
            global: {
                responsive: true,
                maintainAspectRatio: false
            },

            legend: {
                display: false,
            },


            scales: {

                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        }
    });
};