function verificarPassword() {
  const password1 = document.querySelector("#password1").value;
  const password2 = document.querySelector("#password2").value;
  const password3 = document.querySelector("#password3").value;

  if (password1 === "9" && password2 === "1" && password3 === "1") {
    mostrarResultado("password 1 correcto");
  } else if (password1 === "7" && password2 === "1" && password3 === "4") {
    mostrarResultado("password 2 es correcto");
  } else {
    mostrarResultado("password incorrecto");
  }
}

function mostrarResultado(mensaje) {
  const resultado = document.querySelector("#resultado");
  resultado.textContent = mensaje;
}