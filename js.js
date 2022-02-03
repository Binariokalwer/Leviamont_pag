var voz_act = document.getElementById("robot");
var model = document.getElementById("model");
var preload_1 = document.getElementById("preload_1");

function robot_voz(){
    speechSynthesis.speak(new SpeechSynthesisUtterance("hola"));
}

function vide_buttons(){
        window.open("https://www.youtube.com/embed/6xu_MrSxZaY", '_blank');
        window.open("https://www.youtube.com/embed/hRo7MUfomHg","_black");
}

function menu(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'menú',
        text: "mostrando opciones",
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'ir a modelos 3d',
        cancelButtonText: 'permanecer aqui',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Accediendo',
            'Espere un momento',
            'success'
          )
          location.href='modelos_leviamont.html'
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'De acuerdo',
            'De click en ok para continuar',
            'success'
          )
        }
      })
}

function modelo(numero){
  if(numero == 1){
    speechSynthesis.speak( new SpeechSynthesisUtterance("cargando modelo numero" + numero));
    preload_1.style.visibility="hidden";
    model.src="https://sketchfab.com/models/1bd798b790c640ceb7f6a1cd6f7c8a80/embed";
  }else if (numero == 2){
    speechSynthesis.speak( new SpeechSynthesisUtterance("cargando modelo numero" + numero));
    preload_1.style.visibility="hidden";
    model.src="https://sketchfab.com/models/4c9289e3202f4d259c0e733ddbbb485c/embed"

  }else if (numero == 3){

  } else if (numero == 4){
  
  }
}

function loading_page (){
  Swal.fire({
    title: 'Seleccione el modelo 3D que quiera ver'
,    icon:'success',
  })
}

    