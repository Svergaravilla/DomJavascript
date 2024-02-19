function validacion(entrada) {
  let regex = /^[0-9]+$/; //creacion de patron
  return regex.test(entrada); // validacion
}

let botonsumar = document.getElementById("btn-sumar");
let botonrestar = document.getElementById("btn-restar");

botonsumar.addEventListener("click", function (e) {
  e.preventDefault();
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;

  if (validacion(valor1) && validacion(valor2)) {
    let sumar = Number(valor1) + Number(valor2);
    document.querySelector(".resultado").innerHTML = sumar;
  }
});

botonrestar.addEventListener("click", function (e) {
  e.preventDefault();
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;

  if (validacion(valor1) && validacion(valor2)) {
    let restar = Number(valor1) - Number(valor2);
    if (restar < 0) {
      document.querySelector(".resultado").innerHTML = 0;
    } else {
      document.querySelector(".resultado").innerHTML = restar;
    }
  }
});
