/**
 * Header Graph
 */
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2013', 1000, 400],
        ['2014', 1170, 460],
        ['2015', 660, 1120],
        ['2016', 1030, 540]
    ]);

    var unpaid_balance = {
        title: 'Unpaid Balance',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        'backgroundColor': '#eee'
    };

    var accepted_shares = {
        title: 'Accepted Shares',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        'backgroundColor': '#eee'
    };

    var hash_rate = {
        title: 'Hash Rates',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        'backgroundColor': '#eee'
    };

    var chart = new google.visualization.AreaChart(document.getElementById('unpaid-balance'));
    chart.draw(data, unpaid_balance);

    var chart = new google.visualization.AreaChart(document.getElementById('accepted-shares'));
    chart.draw(data, accepted_shares);
    
    var chart = new google.visualization.AreaChart(document.getElementById('hash-rate'));
    chart.draw(data, hash_rate);
}
/*######################################################################################*/

/**
 * Details Graphs
 */
