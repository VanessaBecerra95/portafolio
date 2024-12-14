<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['mensaje']);

    // Validación básica
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Configuración del correo
        $to = "va.becerrazamorano.com"; // Reemplaza con tu correo
        $subject = "Nuevo mensaje de contacto";
        $body = "Nombre: $name\nCorreo: $email\nMensaje:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Mensaje enviado correctamente.";
        } else {
            echo "Error al enviar el mensaje.";
        }
    } else {
        echo "Todos los campos son obligatorios.";
    }
} else {
    echo "Método no permitido.";
}
