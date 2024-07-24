class Pessoa {
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };
    ola(){
        return('Olá! ' + this.nome);
    };
    calculaIdade(){
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoa1 = new Pessoa(['Ana','Silva'],1994,'Professor')

console.log(pessoa1)


class Estudante extends Pessoa{
    #matricula
    constructor(nome, anoDeNascimento, profissao, matricula) {
        //herdando  de pessoa
        super(nome, anoDeNascimento, profissao)
        this.#matricula = matricula
    };
    getMatricula(){
        return this.#matricula
    }
    setMatricula(valor){
        this.#matricula = valor
    }
    
}

const aluno1 = new Estudante('Julio', 1999, 'Estudante', 343510) 
console.log(aluno1)
//matricula é um atributo privado 
aluno1.matricula = 353510
console.log(aluno1.getMatricula())

aluno1.setMatricula(353515)
console.log(aluno1.getMatricula())

