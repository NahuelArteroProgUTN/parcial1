function valida_envia(){
    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
           alert("Tiene que escribir su nombre")
           document.fvalida.nombre.focus()
           return 0;
    }

    if (document.fvalida.domicilio.value.length==0){
        alert("ingrese su domicilio")
        document.fvalida.domicilio.focus()
        return 0;
}

 
 if (document.fvalida.trabajo.value.length==0){
    alert("indique por favor que trabajo necesita")
    document.fvalida.trabajo.focus()
    return 0;
}
 
 
    //valido el interés
    if (document.fvalida.interes.selectedIndex==0){
           alert("Por favor seleccione un momento del dia para la visita")
           document.fvalida.interes.focus()
           return 0;
    }
 
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}