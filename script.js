/*script solicitando nombre de un estudiante, asi mismo 3 materias con 3 notas por materia, se mostrara el promedio por cada materia, el promedio final y cual fue la mejor materia con su respectivo promedio, repitiendo el mismo proceso para otro estudiante o dando por terminado el programa.*/
var nombre = prompt("Introduce tu nombre y apellido:");
document.write('<br>Hola ' + nombre + ', tu promedio en:<br>');
var materia1 = prompt("Introduce el nombre de la primer materia:");
document.write(materia1 + ' es ');
var nota1 = prompt("Introduce la nota de tu primer parcial:");
var nota2 = prompt("Introduce la nota de tu segundo parcial:");
var nota3 = prompt("Introduce la nota de tu examen final:");

function sumaTresNumeros(valor1, valor2, valor3) {
  var promedio1 = ("nota1, nota2, nota3");
  var totalsuma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3); 
  document.write(totalsuma / 3);
}
sumaTresNumeros(nota1, nota2, nota3);

document.write('<br>Hola ' + nombre + ', tu promedio en:<br>');
var materia2 = prompt("Introduce el nombre de la segunda materia:");
document.write(materia2 + ' es ');
var nota1 = prompt("Introduce la nota de tu primer parcial:");
var nota2 = prompt("Introduce la nota de tu segundo parcial:");
var nota3 = prompt("Introduce la nota de tu examen final:");

function sumaTresNumeros(valor1, valor2, valor3) {
  var promedio2 = ("nota1, nota2, nota3");
  var totalsuma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
  document.write(totalsuma / 3);
}
sumaTresNumeros(nota1, nota2, nota3);

document.write('<br>Hola ' + nombre + ', tu promedio en:<br>');
var materia3 = prompt("Introduce el nombre de la tercera materia:");
document.write(materia3 + ' es ');
var nota1 = prompt("Introduce la nota de tu primer parcial:");
var nota2 = prompt("Introduce la nota de tu segundo parcial:");
var nota3 = prompt("Introduce la nota de tu examen final:");

function sumaTresNumeros(valor1, valor2, valor3) {
  var promedio3 = ("nota1, nota2, nota3");
  var totalsuma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
  document.write(totalsuma / 3);
}
sumaTresNumeros(nota1, nota2, nota3);

/*document.write("<br>Hola " + nombre + ", tu promedio final es:");
function promFinal(valor1, valor2, valor3) {
  var promedios = ("nota1, nota2, nota3");
  var totalSuma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
  document.write(totalSuma / 3); 
}
promFinal(nota1, nota2, nota3);*/

/*var primera = "materia1";
var segunda = "materia2";
var tercera = "materia3";
function mejorPromedio(primera,segunda, tercera) {

if (primera){
  document.write("<br>La materia con mejor promedio es:");
}else if(segunda){
  document.write("<br>La materia con mejor promedio es:"); 
}else{
  document.write("<br>Esta es la mejor materia con un promedio de:");
}
}
mejorPromedio(primera, segunda, tercera);*/

/*var programaNuevo = prompt("Deseas continuar o terminar con el programa:");
function programa(continuar, terminar) {
  var programaNuevo = (escribe);
  if (continuar) {
      document.write("continuarprograma:"); 
  } else {
      document.write("terminarprograma:");
  }
}*/