Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'


fetch('https://multiapi-app.herokuapp.com/foods')
    .then(response => response.json())
    .then(foods => printFoodsCharts(foods))



function printFoodsCharts(foods) {

    const [carrot, pumpkin, corn, aguacate, ternera, cerdo] = foods       

    printCaloriesChart(carrot, pumpkin, corn, aguacate, ternera, cerdo)
    printProteinsChart(carrot, pumpkin, corn, aguacate, ternera, cerdo)
    printFatChart(carrot, pumpkin, corn, aguacate, ternera, cerdo)
    printCalciumChart(carrot, pumpkin, corn, aguacate, ternera, cerdo)
    printMixedChart(carrot, pumpkin, corn, aguacate, ternera, cerdo)
}



function printCaloriesChart(carrot, pumpkin, corn, aguacate, ternera, cerdo) {

    const data = {
        labels: [carrot.name, pumpkin.name, corn.name, aguacate.name, ternera.name, cerdo.name],
        datasets: [{
        data: [carrot.kcal, pumpkin.kcal, corn.kcal, aguacate.kcal, ternera.kcal, cerdo.kcal],
        label: 'calorías',
        borderWidth: 2,
        borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
        backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)'],
        }]
        }
        let options = {
        plugins: {
        legend: {
            display: false
        }
        }
        }
        new Chart('chart1', { type: 'bar', data, options })
}

function printProteinsChart(carrot, pumpkin, corn, aguacate, ternera, cerdo){
    
    const data = {
    labels: [carrot.name, pumpkin.name, corn.name, aguacate.name, ternera.name, cerdo.name],
    datasets: [{
    data: [carrot.protein, pumpkin.protein, corn.protein, aguacate.protein, ternera.protein, cerdo.protein],
    label: 'calorías',
    borderWidth: 2,
    borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
    backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)'],
    }]
    }
    const options = {
    plugins: {
    legend: {
        position: 'left'
    }
    }
    }
    new Chart('chart2', { type: 'doughnut', data, options })
}

function printFatChart(carrot, pumpkin, corn, aguacate, ternera, cerdo){

    const data = {
        labels: [carrot.name, pumpkin.name, corn.name, aguacate.name, ternera.name, cerdo.name],
        datasets: [{
        data: [carrot.fat, pumpkin.fat, corn.fat, aguacate.fat, ternera.fat, cerdo.fat],
        label: 'grasas',
        borderWidth: 2,
        borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
        backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)'],
        }]
        }
        const options = {
        plugins: {
        legend: {
            position: 'left'
        }
        }
        }
        new Chart('chart3', { type: 'doughnut', data, options })
    }

    function printCalciumChart(carrot, pumpkin, corn, aguacate, ternera, cerdo){

        const data = {
            labels: [carrot.name, pumpkin.name, corn.name, aguacate.name, ternera.name, cerdo.name],
            datasets: [{
            data: [carrot.calcium, pumpkin.calcium, corn.calciium, aguacate.calcium, ternera.calcium, cerdo.calcium],
            label: 'Calcio',
            borderWidth: 2,
            borderColor: ['rgba(116, 72, 194, 1)', 'rgba(33, 192, 215, 1)', 'rgba(217, 158, 43, 1)', 'rgba(205, 58, 129, 1)', 'rgba(156, 153, 204, 1)', 'rgba(225, 78, 202, 1)'],
            backgroundColor: ['rgba(116, 72, 194, 0.4)', 'rgba(33, 192, 215, 0.4)', 'rgba(217, 158, 43, 0.4)', 'rgba(205, 58, 129, 0.4)', 'rgba(156, 153, 204, 0.4)', 'rgba(225, 78, 202, 0.4)'],
            }]
            }
            const options = {
            plugins: {
            legend: {
                position: 'left'
            }
            }
            }
            new Chart('chart4', { type: 'doughnut', data, options })
        }
     
        function printMixedChart(carrot, pumpkin, corn, aguacate, ternera, cerdo) {

            const data = {
                labels: [carrot.name, pumpkin.name, corn.name, aguacate.name, ternera.name, cerdo.name],
                datasets: [
                    {
                data: [carrot.kcal, pumpkin.kcal, corn.kcal, aguacate.kcal, ternera.kcal, cerdo.kcal],
                label: 'calorías',
                borderWidth: 2,
                borderColor: ['rgba(116, 72, 194, 1)'],
                backgroundColor: ['rgba(116, 72, 194, 0.4)'],
                },
                  {
                data: [carrot.protein, pumpkin.protein, corn.protein, aguacate.protein, ternera.pprotein, cerdo.protein],
                label: 'proteínas',
                borderWidth: 2,
                borderColor: ['rgba(33, 192, 215, 1)'],
                backgroundColor: ['rgba(33, 192, 215, 0.4)'],
                }
            ]
                }
                let options = {
                plugins: {
                legend: {
                    display: false
                }
                }
                }
                new Chart('chart5', { type: 'bar', data, options })
        }