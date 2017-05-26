/**
 * 
 */

// Callback that draws the pie chart for Simulations Histogram.
function drawHistograma() {
	

        // Create the data table for Simulations Histogram.
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Classes');
        data.addColumn('number', 'Quantidade Registrada');
        data.addRows(classes);
        var i;
        for (i = 0; i<classes ; i++){
        	data.setValue(i, 0, histogramaX[i]);
        	data.setValue(i, 1, histogramaY[i]);
        }

        // Set options for Simulations Histogram chart.
        var options = {title:'Histograma de Simulacoes',
                       width:800,
                       height:600};

        // Instantiate and draw the chart for Simulations Histogram.
        var chart = new google.visualization.ColumnChart(document.getElementById('HistogramaSimulacoes_div'));
        chart.draw(data, options);
}