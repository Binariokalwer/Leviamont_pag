function enviar_datos(){
    const botToken = "6112631546:AAEvjzYV121YXYmrY9jib2xmGFMkWYJaHDE";
    const chatId = "5620673847";
    var name_var = document.getElementById("nombre").value;
    var phone = document.getElementById("telefono").value;
    var email = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensajes").value;
    const message = "Peticion de app por parte de " + String(name_var) + " y su numero de telefono es: " + String(phone) + " y tiene correo de: " + String(email) + " y te deja el siguiente mensaje: " + String(mensaje);
    axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {chat_id: chatId,text: message})
  .then(function(response) {
    console.log("Mensaje enviado con éxito:", response.data);
    Swal.fire({
        title: 'Mensaje enviado con éxito',
        icon: 'success',
      }).then(() => {
        history.back();
      });
  })
  .catch(function(error) {
    console.error("Error al enviar el mensaje:", error);
    Swal.fire({
        title: 'Error al enviar',
        icon: 'error',
    })
  });
}