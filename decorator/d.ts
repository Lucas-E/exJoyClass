// Interface que define o contrato para os sanduíches
interface Sanduiche {
    custo(): number;
    descricao(): string;
  }
  
  // Implementação base: Sanduíche de Carne
  class SanduicheDeCarne implements Sanduiche {
    custo(): number {
      return 7.49;
    }
  
    descricao(): string {
      return "Sanduíche de Carne";
    }
  }
  
  // Decorator abstrato para ingredientes adicionais
  abstract class Decorator implements Sanduiche {
    protected sanduiche: Sanduiche;
  
    constructor(sanduiche: Sanduiche) {
      this.sanduiche = sanduiche;
    }
  
    abstract custo(): number;
    abstract descricao(): string;
  }
  
  // Implementação concreta do decorator para Frango Assado
  class FrangoAssado extends Decorator {
    custo(): number {
      return this.sanduiche.custo() + 4.5;
    }
  
    descricao(): string {
      return this.sanduiche.descricao() + ", Frango Assado";
    }
  }
  
  // Implementação concreta do decorator para Pepperoni
  class Pepperoni extends Decorator {
    custo(): number {
      return this.sanduiche.custo() + 0.99;
    }
  
    descricao(): string {
      return this.sanduiche.descricao() + ", Pepperoni";
    }
  }
  
  // Implementação concreta do decorator para Queijo Mussarela Ralado
  class QueijoMussarelaRalado extends Decorator {
    custo(): number {
      return this.sanduiche.custo() + 2.0;
    }
  
    descricao(): string {
      return this.sanduiche.descricao() + ", Queijo Mussarela Ralado";
    }
  }
  
  // Exemplo de uso
  const sanduicheBase: Sanduiche = new SanduicheDeCarne();
  const sanduicheDecorado: Sanduiche = new QueijoMussarelaRalado(new Pepperoni(new FrangoAssado(sanduicheBase)));
  
  console.log(`${sanduicheDecorado.descricao()} custa $${sanduicheDecorado.custo().toFixed(2)}.`);
  