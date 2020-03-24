export function modulo(){
    var $ = el => document.querySelector(el),
        frmAlumnos = $("#frm-docentes");
    frmAlumnos.addEventListener("submit",e=>{
        e.preventDefault();
        e.stopPropagation();
        
        let alumnos = {
            accion    : frmAlumnos.dataset.accion,
            idAlumno  : frmAlumnos.dataset.iddocente,
            codigo    : $("#txtCodigoDocente").value,
            nombre    : $("#txtNombreDocente").value,
            dui       : $("#txtDuiDocente").value,
            direccion : $("#txtDireccionDocente").value,
            telefono  : $("#txtTelefonoDocente").value
        };
        fetch(`private/Modulos/docentes/procesos.php?proceso=recibirDatos&docente=${JSON.stringify(docentes)}`).then( resp=>resp.json() ).then(resp=>{
            $("#respuestaDocente").innerHTML = `
                <div class="alert alert-success" role="alert">
                    ${resp.msg}
                </div>
            `;
        });
    });
    frmAlumnos.addEventListener("reset",e=>{
        $("#frm-docentes").dataset.accion = 'nuevo';
        $("#frm-docentes").dataset.iddocente = '';
    });
}