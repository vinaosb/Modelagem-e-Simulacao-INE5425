/**
 * 
 */

function getX() {
	var x = [0];
	for (i = 1; i < passos; i++) {
		x.push(x[i-1] + l*Math.cos(Math.PI*2*Math.random()));
	}
	return x;
}

function getY() {
	var y = [0];
	for (i = 1; i < passos; i++) {
		y.push(y[i-1] + l*Math.sin(Math.PI*2*Math.random()));
	}
	return y;
}

function getD() {
	var d = [0];
	for (i = 1; i < passos; i++) {
		d.push(Math.sqrt(Math.pow(x[i],2) + Math.pow(y[i],2)));
	}
	return d;
}

function getF() {
	var f = [0];
	for (i = 1; i < passos; i++) {
		f.push(l*Math.sqrt(i));
	}
	return f;
}

function getHist() {
	  var sx =  new Array(simulacoes);
	  for (i = 0; i < simulacoes; i++) {
		  sx[i] = new Array(passos);
		  sx[i][0] = 0;
		  for (j = 1; j < passos; j++) {
			  sx[i][j] = sx[i][j-1] + l*Math.cos(Math.PI*2*Math.random());
		  }
	  }
	  var sy =  new Array(simulacoes);
	  for (i = 0; i < simulacoes; i++) {
		  sy[i] = new Array(passos);
		  sy[i][0] = 0;
		  for (j = 1; j < passos; j++) {
			  sy[i][j] = sy[i][j-1] + l*Math.sin(Math.PI*2*Math.random());
		  }
	  }
	  
	  var sd =  [0];
	  for (i = 0; i < simulacoes; i++) {
		  sd.push(Math.sqrt(Math.pow(sx[i][passos-1],2) + Math.pow(sy[i][passos-1],2)));
	  }
	  sd.sort();


	  var distDasDist = sd[simulacoes-1] - sd[0];
	  var distPorClasse = distDasDist/classes;
	  
	  var histogramaX = new Array(classes);
	  for (i = 0; i < classes; i++) {
		  histogramaX[i] = (i + 0.5)*distPorClasse;
	  }
	  
	  var histogramaY = new Array(classes);
	  for (i = 0; i < classes; i++) {
		  histogramaY[i] = 0;
	  }
	  for (i = 0; i < classes; i++) {
		  for (j = 0; j < simulacoes; j++) {
			  if (Boolean(sd[j] >= i*distPorClasse)) {
				  if (Boolean(sd[j] < (i+1)*distPorClasse)) {
				  	histogramaY[i]++;
				  }
			  }
		  }
	  }
	  
	  return {
		  histX: histogramaX, 
		  histY : histogramaY
		  };
}

function getClasses () {
	var classes = Math.sqrt(simulacoes);
	if (classes > 30) {
		classes = 30;
	} else if (classes < 2) {
		classes = 2;
	}
	return classes;
}