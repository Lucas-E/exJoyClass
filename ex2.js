// Definição do objeto Banco
var Banco = {
    conta: "12345-6",
    saldo: 1000, // Saldo inicial
    tipoDeConta: "Corrente",
    agencia: "Agência Principal",
    
    // Método para buscar o saldo
    buscarSaldo: function () {
      return this.saldo;
    },
    
    // Método para fazer um depósito
    deposito: function (valor) {
      if (valor > 0) {
        this.saldo += valor;
        return "Depósito de R$" + valor + " realizado com sucesso. Novo saldo: R$" + this.saldo;
      } else {
        return "Valor inválido para depósito.";
      }
    },
    
    // Método para realizar um saque
    saque: function (valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return "Saque de R$" + valor + " realizado com sucesso. Novo saldo: R$" + this.saldo;
      } else if (valor > this.saldo) {
        return "Saldo insuficiente para o saque.";
      } else {
        return "Valor inválido para saque.";
      }
    },
    
    // Método para obter o número da conta
    numeroDaConta: function () {
      return this.conta;
    }
  };
  
  // Exemplos de uso
  console.log("Número da conta: " + Banco.numeroDaConta());
  console.log("Saldo atual: R$" + Banco.buscarSaldo());
  console.log(Banco.deposito(500));
  console.log(Banco.saque(200));
  console.log("Saldo atual: R$" + Banco.buscarSaldo());
  