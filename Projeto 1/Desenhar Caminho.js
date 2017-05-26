/**
 * 
 */

// Callback that draws the pie chart for the Path lines.
function drawCaminho() {
	

        // Create the data table for Path lines.
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'X');
        data.addColumn('number', 'Caminho');
        data.addRows(passos);
        var i;
        for (i = 0; i<passos ; i++){
        	data.setValue(i, 0, x[i]);
        	data.setValue(i, 1, y[i]);
        }

        // Set options for Path lines chart.
        var options = {title:'Caminho',
		        hAxis: {
		               title: 'X'
		                },
		                vAxis: {
		        	       title: 'Y'
		                },
                       width:800,
                       height:600};

        // Instantiate and draw the chart for Path lines.
        var chart = new google.visualization.LineChart(document.getElementById('Caminho_div'));
        chart.draw(data, options);
}