document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#registroModal form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener todos los campos del formulario
        const formData = new FormData(form);
        
        // Convertir FormData a objeto
        const formDataObj = Object.fromEntries(formData);
        
        // Almacenar los datos en localStorage
        localStorage.setItem('formData', JSON.stringify(formDataObj));
        
        // Enviar los datos por POST
        fetch('/Backend/guardarElementos.php', {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Datos enviados con éxito:', data);
            // Aquí puedes agregar lógica para mostrar un mensaje de éxito o actualizar el formulario
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
        });
    });

    // Función para cargar los datos del formulario
    const loadFormData = () => {
        const formDataString = localStorage.getItem('formData');
        if (formDataString) {
            const formDataObj = JSON.parse(formDataString);
            Object.entries(formDataObj).forEach(([key, value]) => {
                const input = form.querySelector(`input[name="${key}"], select[name="${key}"], textarea[name="${key}"]`);
                if (input) {
                    input.value = value;
                }
            });
        }
    };

    // Cargar datos del formulario al cargar la página
    loadFormData();
});
