// Función para enviar el formulario
function enviarFormulario(event) {
	event.preventDefault();
	
	const nombre = document.getElementById('nombre').value;
	const correo = document.getElementById('correo').value;
	const mensaje = document.getElementById('mensaje').value;
	
	// Validación de campos
	if (nombre.trim() === ''
