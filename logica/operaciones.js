//para validar que solo se acepte numeros


function eliminar_Ultimo(){
    var numero_Anterior=document.calcular.valores.value;
    var numero_Nuevo=numero_Anterior.substring(0,numero_Anterior.length-1);
    document.getElementById("valores").value=numero_Nuevo;
}


