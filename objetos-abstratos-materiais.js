// Definição do objeto Carro
function Carro(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
    this.velocidadeAtual = 0;
  }
  
  // Métodos do objeto Carro
  Carro.prototype.ligarMotor = function() {
    console.log("O motor do carro está ligado.");
  };
  
  Carro.prototype.acelerar = function(velocidade) {
    this.velocidadeAtual += velocidade;
    console.log("Acelerando para " + this.velocidadeAtual + " km/h.");
  };
  
  Carro.prototype.parar = function() {
    this.velocidadeAtual = 0;
    console.log("O carro parou.");
  };
  
  // Criando uma instância do objeto Carro
  var meuCarro = new Carro("Sedan", "Prata");
  
  meuCarro.ligarMotor();
  meuCarro.acelerar(60);
  meuCarro.parar();
  