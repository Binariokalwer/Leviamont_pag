var nombre = prompt("inserte un nombre:")
var password = prompt("inserte la clave").split(",")
var key_2 = password
if (password === null) {
    window.location = "/index.html";
} else if (password == "") {
    window.location = "/index.html";
} else if (password != "") {
    comprobar_dat(password);
}

function comprobar_dat(key) {
    var firebaseConfig = {
        apiKey: key[0],
        authDomain: key[1],
        databaseURL: key[2],
        projectId: key[3],
        storageBucket: key[4],
        messagingSenderId: key[5],
        appId: key[6]
    };
    firebase.initializeApp(firebaseConfig);
    var firebase_ref = firebase.database().ref("dat")
    firebase_ref.once("value", function(snapshot) {
        var data = snapshot.val();
        for (let i in data) {}
        enviar_con_id(data.length)

    })

    function enviar_con_id(article_id) {
        console.log("intentando enviarlo...")
        firebase.database().ref('dat/' + article_id).set({ 'info_dat': nombre, });
        console.log("listo")
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'La conexión a la base de datos ha sido exitosa',
            showConfirmButton: false,
            timer: 1500
        })
    }


}



function enviar_dat_levi(num_bot) {
    let firebase_ref = firebase.database().ref("dat2")
    firebase_ref.once("value", function(snapshot) {
        let data = snapshot.val();
        for (let i in data) {}
        enviar_con_id_2(data.length, num_bot)

    })

}

function enviar_con_id_2(id_2, num_boton) {
    if (num_boton == 1) {
        firebase.database().ref('dat2/' + id_2).set({ 'mov': "adelante", });
        console.log("listo")
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'instrucción enviada con exito',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (num_boton == 2) {
        firebase.database().ref('dat2/' + id_2).set({ 'mov': "atraz", });
        console.log("listo")
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'instrucción enviada con exito',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (num_boton == 3) {
        firebase.database().ref('dat2/' + id_2).set({ 'mov': "derecha", });
        console.log("listo")
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'instrucción enviada con exito',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (num_boton == 4) {
        firebase.database().ref('dat2/' + id_2).set({ 'mov': "izquierda", });
        console.log("listo")
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'instrucción enviada con exito',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

var video_camp = document.getElementById("vid")

function video_cap_url() {
    window.open(key_2[7], '_blank');
}