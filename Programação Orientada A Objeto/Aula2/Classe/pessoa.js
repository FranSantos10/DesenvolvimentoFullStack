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
console.log(pessoa1.ola())
console.log(pessoa1.calculaIdade())

class Estudante extends Pessoa{
    constructor(nome, anoDeNascimento, profissao, matricula) {
        //herdando  de pessoa
        super(nome, anoDeNascimento, profissao)
        this.matricula = matricula
    };
    
}

const aluno1 = new Estudante('Julio', 1999, 'Estudante', 343510) 
console.log(aluno1)
console.log(aluno1.ola())
console.log(aluno1.calculaIdade())
aluno1.matricula = 353510
console.log(aluno1.matricula)