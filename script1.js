/*script continuacion del programa */

document.write('<br>Hola ' + nombre + ', tu promedio final es:<br>');
var promedio1 = prompt("Introduce el promedio de la primer materia:");
var promedio2 = prompt("Introduce el promedio de la segunda materia:");
var promedio3 = prompt("Introduce el promedio de la tercera materia:");

function promedioFinal(promedio1, promedio2, promedio3) {
  var promedios = ("promedio1, promedio2, promedio3");
  var totalSuma = parseFloat(promedio1) + parseFloat(promedio2) + parseFloat(promedio3); 
  document.write(totalSuma / 3);
  //document.write(promedio1.toFixed(2));
}
promedioFinal(promedio1, promedio2, promedio3);