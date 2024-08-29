let totalCompra = 150;
let desconto = '';

if (totalCompra > 200) {
    desconto = '20%';
} else if (totalCompra > 100) {
    desconto = '10%';
} else if (totalCompra > 50) {
    desconto = '5%';
} else {
    desconto = 'Sem Desconto';
}

console.log(desconto);

// Classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

// Criando instâncias de Gerente e Desenvolvedor
const gerente = new Gerente('Ana', 40, 'Gerente', 'Financeiro');
const desenvolvedor = new Desenvolvedor('Carlos', 30, 'Desenvolvedor', 'JavaScript');

// Chamando métodos e exibindo resultados no console
console.log(gerente.seApresentar()); // Olá, meu nome é Ana, tenho 40 anos e sou Gerente.
console.log(gerente.trabalhar());    // Ana está trabalhando.
console.log(gerente.gerenciar());    // Ana está gerenciando o departamento de Financeiro.

console.log(desenvolvedor.seApresentar()); // Olá, meu nome é Carlos, tenho 30 anos e sou Desenvolvedor.
console.log(desenvolvedor.trabalhar());    // Carlos está trabalhando.
console.log(desenvolvedor.programar());    // Carlos está programando em JavaScript.
