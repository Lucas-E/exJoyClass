// Interface Galinha
interface Galinha {
    cacarejar(): void;
    botarOvo(): void;
  }
  
  // Classe concreta Galinha
  class GalinhaComum implements Galinha {
    cacarejar(): void {
      console.log("Cocoricó!");
    }
  
    botarOvo(): void {
      console.log("Galinha botou um ovo!");
    }
  }
  
  // Interface Pato
  interface Pato {
    grasnar(): void;
    voar(): void;
  }
  
  // Classe concreta Pato
  class PatoSelvagem implements Pato {
    grasnar(): void {
      console.log("Quack!");
    }
  
    voar(): void {
      console.log("Pato voando!");
    }
  }
  
  // Adaptador para transformar Pato em Galinha
  class AdaptadorPato implements Galinha {
    private pato: Pato;
  
    constructor(pato: Pato) {
      this.pato = pato;
    }
  
    cacarejar(): void {
      this.pato.grasnar();
    }
  
    botarOvo(): void {
      console.log("O pato não bota ovos.");
    }
  }
  
  // Demonstração do uso do AdaptadorPato
  class AdaptadorPatoDemo {
    static executar(): void {
      const patoSelvagem: Pato = new PatoSelvagem();
      const adaptador: Galinha = new AdaptadorPato(patoSelvagem);
  
      // Agora podemos usar o pato como se fosse uma galinha
      console.log("Pato agindo como uma galinha:");
      adaptador.cacarejar();
      adaptador.botarOvo();
    }
  }
  
  // Executar a demonstração
  AdaptadorPatoDemo.executar();
  