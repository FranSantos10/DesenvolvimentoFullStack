/*
This é uma referência ao próprio
objeto, nesse caso, à Pessoa criada
Quando precisamos acessar um
membro dentro do próprio objeto,
usamos o this para deixar claro que
membro tentamos acessar

New instancia o objeto
*/ 

function Pessoa(nome, anoDeNascimento, profissao){
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoa1 = new Pessoa('João',1999,'Estudante')
//mostra o objeto
console.log(pessoa1)
//altera o nome para nome completo
pessoa1.nome = ['João', 'Santos']
//mostra todos os dados 
console.log(`${pessoa1.nome} nasceu em ${pessoa1.anoDeNascimento} \ntem ${pessoa1.calculaIdade()} anos e sua profissão é ${pessoa1.profissao}`)
//exibe somente o primeiro nome
console.log(pessoa1.nome[0])
//exibe o objeto com nome atualizado
console.log(pessoa1)
console.log(pessoa1.constructor)
console.log(pessoa1.valueOf())