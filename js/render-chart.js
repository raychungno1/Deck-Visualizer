function renderChart(id, stats, duration = 0) {
    const board = document.getElementById("board");
    const height = board.offsetHeight;
    const data = {
        labels: ["Attack", "Defense", "Synergy", "Versatility", "F2P"],
        datasets: [{
            data: stats,
            backgroundColor: "rgba(255, 0, 0, 0.5)"
        }],
    }
    
    const config = {
        type: 'radar',
        data: data,
        options: {
            elements: {
                line: {
                    borderWidth: height / 200,
                    borderColor: "red"
                },
                point: {
                    pointRadius: 0
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    grid: {
                        color: "black",
                        lineWidth: height / 400,
                    },
                    max: 5,
                    min: 0,
                    ticks: {
                        display: false,
                        stepSize: 1,
                        color: "black",
                    },
                    pointLabels: {
                        display: false,
                        color: "black",
                        font: {
                            size: height / 30,
                        }
                    }
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
            animation: {
                duration: duration,
                easing: "easeInOutQuart"
            }
        }
    }
    
    return new Chart(
        document.getElementById(id),
        config
    )
}

export { renderChart }