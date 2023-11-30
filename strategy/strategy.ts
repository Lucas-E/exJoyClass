// Interface Strategy
interface Strategy {
    execute(a: number, b: number): number;
  }
  
  // Implementações concretas das estratégias
  class SomaStrategy implements Strategy {
    execute(a: number, b: number): number {
      return a + b;
    }
  }
  
  class SubtracaoStrategy implements Strategy {
    execute(a: number, b: number): number {
      return a - b;
    }
  }
  
  class MultiplicacaoStrategy implements Strategy {
    execute(a: number, b: number): number {
      return a * b;
    }
  }
  
  // Contexto que utiliza a estratégia
  class Calculadora {
    private strategy: Strategy;
  
    setStrategy(strategy: Strategy): void {
      this.strategy = strategy;
    }
  
    calcular(a: number, b: number): number {
      if (this.strategy) {
        return this.strategy.execute(a, b);
      }
      throw new Error("Estratégia não definida");
    }
  }
  
  // Aplicação principal
  const calculadora = new Calculadora();
  
  // Obtenha os valores do usuário
  const valor1 = parseInt(prompt("Digite o primeiro valor: ") || "0", 10);
  const valor2 = parseInt(prompt("Digite o segundo valor: ") || "0", 10);
  
  // Receba a operação desejada
  const operacao = prompt("Digite a operação (+, -, *): ");
  
  // Defina a estratégia com base na operação
  if (operacao === "+") {
    calculadora.setStrategy(new SomaStrategy());
  } else if (operacao === "-") {
    calculadora.setStrategy(new SubtracaoStrategy());
  } else if (operacao === "*") {
    calculadora.setStrategy(new MultiplicacaoStrategy());
  } else {
    console.log("Operação inválida");
    process.exit(1);
  }
  
  // Realize a operação e imprima o resultado
  const resultado = calculadora.calcular(valor1, valor2);
  console.log(`Resultado da operação: ${resultado}`);
  