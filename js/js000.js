function algo(input){
  let numero = input.value;
  let valorCajaUno =document.getElementById("pantalla1").value;
  let valorCajaDos=document.getElementById("pantalla2").value;
  if (valorCajaUno===""){
    document.getElementById("pantalla1").value=numero;
  } else if(valorCajaDos==="") {
    document.getElementById("pantalla2").value=numero;
  }
}
function sumar(){
  let numeroUno = parseInt(document.getElementById("pantalla1").value);
  let numeroDos = parseInt(document.getElementById("pantalla2").value);
  let resultado = numeroUno+numeroDos;
  document.getElementById("resultado").value  =resultado;
}

function restar(){
  let numeroUno = parseInt(document.getElementById("pantalla1").value);
  let numeroDos = parseInt(document.getElementById("pantalla2").value);
  let resultado = numeroUno - numeroDos;
  document.getElementById("resultado").value =resultado;
}

function division(){
  let numeroUno = parseInt(document.getElementById("pantalla1").value);
  let numeroDos = parseInt(document.getElementById("pantalla2").value);
  let resultado = numeroUno / numeroDos;
  document.getElementById("resultado").value=resultado;
}

function multiplicacion(){
  let numeroUno = parseInt(document.getElementById("pantalla1").value);
  let numeroDos = parseInt(document.getElementById("pantalla2").value);
  let resultado = numeroUno * numeroDos;
  document.getElementById("resultado").value= resultado;
}
