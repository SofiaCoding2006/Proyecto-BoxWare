<?php
// Procesar los datos del formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $formDataString = $_POST['formData'];
    
    // Decodificar los datos JSON
    $formDataObj = json_decode($formDataString, true);
    
    // Almacenar los datos en localStorage
    setcookie('formData', json_encode($formDataObj), time() + (86400 * 30)); // 30 días
    
    echo "Datos guardados con éxito";
} else {
    echo "No se recibieron datos del formulario.";
}
?>
