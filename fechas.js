// Obtener la fecha de hoy
const fechaHoy = new Date();

// La fecha de tu nacimiento (03 de marzo de 1981)
const fechaNacimiento = new Date(1981, 2, 3); // Recuerda que los meses en JavaScript son indexados desde 0 (Enero es el mes 0).

// Verificar si hoy es más tarde (>) que la fecha de tu nacimiento
const esMasTarde = fechaHoy > fechaNacimiento;

// Obtener el día de tu nacimiento (Martes)
const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const diaNacimiento = diasSemana[fechaNacimiento.getDay()];

// Obtener el mes de tu nacimiento (Marzo)
const mesesAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const mesNacimiento = mesesAnio[fechaNacimiento.getMonth()];

// Obtener el año de tu nacimiento (1981)
const anioNacimiento = fechaNacimiento.getFullYear();

// Imprimir resultados en consola
console.log('Fecha de hoy:', fechaHoy);
console.log('Fecha de nacimiento:', fechaNacimiento);
console.log('¿Hoy es más tarde que mi fecha de nacimiento?', esMasTarde);
console.log('Día de nacimiento:', diaNacimiento);
console.log('Mes de nacimiento:', mesNacimiento);
console.log('Año de nacimiento:', anioNacimiento);
