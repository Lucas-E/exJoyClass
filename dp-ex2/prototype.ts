// Classe abstrata Veiculo
abstract class Veiculo {
    constructor(
        public modelo: string,
        public marca: string,
        public cor: string,
        public numeroRodas: number
    ) {}

    abstract clone(): Veiculo;
    abstract represent(): string;
}

// Subclasse Carro
class Carro extends Veiculo {
    constructor(
        modelo: string,
        marca: string,
        cor: string,
        numeroRodas: number,
        public numeroPortas: number
    ) {
        super(modelo, marca, cor, numeroRodas);
    }

    clone(): Carro {
        return new Carro(
            this.modelo,
            this.marca,
            this.cor,
            this.numeroRodas,
            this.numeroPortas
        );
    }

    represent(): string {
        return `Carro ${this.marca} ${this.modelo}, cor ${this.cor}, ${this.numeroRodas} rodas, ${this.numeroPortas} portas`;
    }
}

// Subclasse Moto
class Moto extends Veiculo {
    constructor(
        modelo: string,
        marca: string,
        cor: string,
        numeroRodas: number,
        public partidaEletrica: boolean
    ) {
        super(modelo, marca, cor, numeroRodas);
    }

    clone(): Moto {
        return new Moto(
            this.modelo,
            this.marca,
            this.cor,
            this.numeroRodas,
            this.partidaEletrica
        );
    }

    represent(): string {
        return `Moto ${this.marca} ${this.modelo}, cor ${this.cor}, ${this.numeroRodas} rodas, partida elétrica: ${this.partidaEletrica}`;
    }
}

// Classe Aplicacao
class Aplicacao {
    criarVeiculos(): Veiculo[] {
        return [
            new Carro("Fusca", "Volkswagen", "Azul", 4, 2),
            new Carro("Civic", "Honda", "Prata", 4, 4),
            new Moto("Ninja", "Kawasaki", "Verde", 2, true),
            new Moto("Harley", "Davidson", "Preto", 2, false),
            new Carro("Corolla", "Toyota", "Branco", 4, 4),
            new Moto("CBR", "Honda", "Vermelho", 2, true),
        ];
    }

    clonarVeiculos(veiculos: Veiculo[]): Veiculo[] {
        return veiculos.map((veiculo) => veiculo.clone());
    }

    imprimirVeiculos(veiculos: Veiculo[]): void {
        for (const veiculo of veiculos) {
            console.log(veiculo.represent());
        }
    }
}

// Uso da aplicação
const aplicacao = new Aplicacao();

// Criar veículos
const veiculosOriginais = aplicacao.criarVeiculos();

// Clonar veículos
const veiculosClonados = aplicacao.clonarVeiculos(veiculosOriginais);

// Imprimir veículos clonados
aplicacao.imprimirVeiculos(veiculosClonados);
