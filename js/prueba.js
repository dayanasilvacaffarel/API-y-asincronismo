
function myFunction() {
    let message, x;
    message = document.getElementById("intro");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try { //Ejecutamos un try con condicionales arrojando(throw) un mensaje:
        if (x == "") throw "Contenido vacio";
        if (isNaN(x)) throw "No es un numero";
        x = Number(x);
        if (x > 10) throw "Numero demasiado alto";
        if (x < 5) throw "Numero demasiado bajo";
    }
    catch (err) { //Ejecutamos un catch para manejar el error mostrandolo en el navegador
        message.innerHTML = "Error: " + err + ".";
    }
    finally { //Ejecutamos la accion que termina con la funcion paradevolver el valor requerido
        document.getElementById("demo").value = "";
    }
}
