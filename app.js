document.addEventListener("DOMContentLoaded", e=>{
    document.querySelector("#frmAlumnos").addEventListener("submit", event=>{
        event.preventDefault();

        let codigo = document.querySelector("#txtCodigoAlumno").Value,
            nombre = document.querySelector("#txtNombreAlumno").Value,
            direccion = document.querySelector("#txtDireccionAlumno").Value,
            telefono = document.querySelector("#txtTelefonoAlumno").Value;

            console.log(codigo, nombre, direccion, telefono);

            if( 'localStorage' in window ){
                window.localStorage.setItem("codigo", codigo);
                window.localStorage.setItem("nombre", nombre);
                window.localStorage.setItem("direccion", direccion);
                window.localStorage.setItem("telefono", telefono);
            } else {
                alert("Por favor ACTUALIZATE!!!.");
         }
        
    });
    document.querySelector("#btnRecuperarAlumno").addEventListener("click", event=>{
        document.querySelector("#txtCodigoAlumno").Value = window.localStorage.getItem("codigo");
        document.querySelector("#txtNombreAlumno").Value = window.localStorage.getItem("nombre");
        document.querySelector("#txtDireccionAlumno").Value = window.localStorage.getItem("direccion");
        document.querySelector("#txtTelefonoAlumno").Value = window.localStorage.getItem("telefono");
    });
});
