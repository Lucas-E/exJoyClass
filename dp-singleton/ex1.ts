class SistemaSeguranca {
    private static instancia: SistemaSeguranca;
    private senhaBaseSecreta: string = "senhaUltraSecreta123";
  
    private constructor() {}
  
    public static obterInstancia(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    public acessarBaseSecreta(senhaDigitada: string): void {
      if (senhaDigitada === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta!");
      } else {
        console.log("Acesso negado. Senha incorreta!");
      }
    }
  }
  
  // Programa principal
  const sistemaDeSeguranca = SistemaSeguranca.obterInstancia();
  
  // Agente tentando acessar a Base Secreta
  sistemaDeSeguranca.acessarBaseSecreta("senhaIncorreta"); // Acesso negado. Senha incorreta!
  sistemaDeSeguranca.acessarBaseSecreta("senhaUltraSecreta123"); // Acesso concedido à Base Secreta!
  
  // Tentando criar uma nova instância - deve retornar a mesma instância existente
  const outraInstancia = SistemaSeguranca.obterInstancia();
  console.log(sistemaDeSeguranca === outraInstancia); // true
  