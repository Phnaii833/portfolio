const graphicDesignCtx = document.getElementById('graphicDesignChart').getContext('2d');
const frontendCtx = document.getElementById('frontendChart').getContext('2d');
const backendCtx = document.getElementById('backendChart').getContext('2d');

const graphicDesignChart = new Chart(graphicDesignCtx, {
    type: 'doughnut',
    data: {
        labels: ['Canva', 'Photoshop', 'Adobe Illustrator', 'Figma'],
        datasets: [{
            data: [90, 70, 40, 70],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});

const frontendChart = new Chart(frontendCtx, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'React'],
        datasets: [{
            label: 'Skill Level',
            data: [100, 80, 70, 50],
            backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33FF']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

const backendChart = new Chart(backendCtx, {
    type: 'bar',
    data: {
        labels: ['MongoDB', 'Express', 'Node.js'],
        datasets: [{
            label: 'Skill Level',
            data: [80, 60, 80],
            backgroundColor: ['#FF5733', '#33FF57', '#3357FF']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
