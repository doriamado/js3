//soma os valores
const btnSoma = document.getElementById('soma');
btnSoma.addEventListener("click",  () => {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;
  let soma = parseInt(valor1) + parseInt(valor2);

 
document.getElementById('resultado').innerHTML = "Resultado:" + soma;

});

const btnSubtração = document.getElementById("subtracao");
btnSubtração.addEventListener("click",  () => {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;
  let subtração = parseInt(valor1) - parseInt(valor2);
  document.getElementById("resultado").innerHTML = "Resultado:" + subtração;
});

const btnMultiplicação = document.getElementById("multiplicacao");
btnMultiplicação.addEventListener("click",  () => {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;
  let multiplicação = parseInt(valor1) * parseInt(valor2);
  document.getElementById("resultado").innerHTML = "Resultado:" + multiplicação;
});

const btnDivisão = document.getElementById("divisao");
btnDivisão.addEventListener("click",  () => {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;
  let divisão = parseInt(valor1) / parseInt(valor2);
  document.getElementById("resultado").innerHTML = "Resultado:" + divisão;
});
