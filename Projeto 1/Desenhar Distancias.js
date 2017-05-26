/**
 * 
 */

// Callback that draws the pie chart for Distance Functions lines.
function drawDistancia() {
	

        // Create the data table for Distance Functions lines.
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'X');
        data.addColumn('number', 'Distancia');
        data.addColumn('number', 'Funcao aproximada');
        data.addRows(passos);
        var i;
        for (i = 0; i<passos ; i++){
        	data.setValue(i, 0, i);
        	data.setValue(i, 1, d[i]);
        	data.setValue(i, 2, f[i]);
        }

        // Set options for Distance Functions lines chart.
        var options = {title:'Distancia por Passos',
				        hAxis: {
				            title: 'Passo',
				            maxValue: passos+1
				          },
				          vAxis: {
				            title: 'Distancia'
				          },
				          series: {
				            1: {curveType: 'function'}
				          },
                       width:800,
                       height:600};

        // Instantiate and draw the chart for Distance Functions lines.
        var chart = new google.visualization.LineChart(document.getElementById('Distancia_div'));
        chart.draw(data, options);
      }