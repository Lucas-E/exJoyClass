try {
    // Solicita ao usuário para inserir dois números
    let numero1 = prompt("Digite o primeiro número: ");
    let numero2 = prompt("Digite o segundo número: ");
  
    // Converte os valores inseridos pelo usuário em números
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
  
    // Verifica se os números são válidos
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Você deve inserir números válidos.");
    }
  
    // Realiza alguma operação com os números
    let resultado = numero1 / numero2;
  
    // Exibe o resultado
    console.log(`O resultado da divisão é: ${resultado}`);
  } catch (error) {
    // Captura a exceção e exibe a mensagem de erro
    console.error(`Ocorreu um erro: ${error.message}`);
  } finally {
    // O bloco 'finally' é opcional, mas é executado sempre, independentemente de ter ocorrido uma exceção ou não
    console.log("Execução concluída.");
  }
  