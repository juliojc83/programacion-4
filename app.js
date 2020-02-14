document.addEventListener("DOMContentLoaded", e=>{
    document.querySelector("#frmAlumnos").addEventListener("submit", event=>{
        event.preventDefault();

        let codigo = document.querySelector("#txtCodigoAlumno").value,
            nombre = document.querySelector("#txtNombreAlumno").value,
            direccion = document.querySelector("#txtDireccionAlumno").value,
            telefono = document.querySelector("#txtTelefonoAlumno").value;

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
        if( 'localStorage' in window){
            let codigo = document.querySelector("#txtCodigoAlumno").value;
            if(codigo != ""){
                document.querySelector("#txtCodigoAlumno").value = window.localStorage.getItem("codigo");
                window.localStorage.getItem("codigo"+codigo);
        document.querySelector("#txtNombreAlumno").value = window.localStorage.getItem("nombre");
                window.localStorage.getItem("nombre"+codigo);
        document.querySelector("#txtDireccionAlumno").value = window.localStorage.getItem("direccion");
                window.localStorage.getItem("direccion"+codigo);
        document.querySelector("#txtTelefonoAlumno").value = window.localStorage.getItem("telefono");
                window.localStorage.getItem("telefono"+codigo);
            }else{
                alert("almacenamiento en local no soportado!!! actualizate")
            }
        }
        
    });
});
