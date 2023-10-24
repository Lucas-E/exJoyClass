// Função tradicional sem parâmetros
function saudacao() {
    console.log("Bem-vindo à calculadora!");
  }
  
  // Função tradicional com parâmetros e retorno de valor
  function adicao(a, b) {
    return a + b;
  }
  
  // Arrow function com parâmetros e retorno de valor
  const subtracao = (a, b) => a - b;
  
  // Saudação
  saudacao();
  
  // Operações de calculadora
  const num1 = 10;
  const num2 = 5;
  
  const soma = adicao(num1, num2);
  const diferenca = subtracao(num1, num2);
  
  console.log("Soma:", soma);
  console.log("Diferença:", diferenca);
  