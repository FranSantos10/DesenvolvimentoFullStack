class Pessoa {
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };
    ola() {
        return ('Olá! ' + this.nome);
    };
    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoa1 = new Pessoa(['Ana', 'Silva'], 1994, 'Professor')

class Estudante extends Pessoa {
    #matricula
    notas = []
    constructor(nome, anoDeNascimento, profissao, matricula) {
        //herdando  de pessoa
        super(nome, anoDeNascimento, profissao)
        this.#matricula = matricula
    };
    getMatricula() {
        return this.#matricula
    }
    setMatricula(valor) {
        this.#matricula = valor
    }
    

}

class Nota {
    constructor(disciplina, grau) {
        this.disciplina = disciplina;
        this.grau = grau;
    }
    addNota(nota) {
        this.grau = (nota)
    }
};

const aluno1 = new Estudante('Julio', 1999, 'Estudante', 343510)
console.log(aluno1)

//aluno1.addNota(10)
console.log(aluno1)
aluno1.notas = new Nota('OO',10)
console.log(aluno1)
aluno1.notas = [new Nota('OO',10),new Nota('Algoritimos',9)]
console.log(aluno1)
aluno1.notas[1].addNota(8)
console.log(aluno1)

