function validacion(cadena_de_texto) {
  let regex = /^[a-zA-Z\s]+$/; //creacion de patron
  return regex.test(cadena_de_texto); // validacion
}

let botton = document.getElementById("botton");

botton.addEventListener("click", function (e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let asunto = document.getElementById("asunto").value;
  let mensaje = document.getElementById("mensaje").value;

  let formulario_listo;
  if (!validacion(nombre)) {

    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido";
    formulario_listo = false;

  }

  if (!validacion(asunto)) {
    document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
    formulario_listo = false;
  }

  if (!validacion(mensaje)) {
    document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido";
  formulario_listo = false;

  }
});
