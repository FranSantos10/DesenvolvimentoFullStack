
//fabricas
function criaEmpregado(salarioBase, valoHoraExtra, qtdHoraExtras) {
    return {
        salarioBase, 
        valoHoraExtra, 
        qtdHoraExtras,

        calculaSalario: function () {
            return this.salarioBase +(this.valoHoraExtra * this.qtdHoraExtras);
        }
    }
}

const empregado1 = criaEmpregado(5000,100,10)
const empregado2 = criaEmpregado(5000,100,2)

console.log(empregado1)
console.log(empregado1.calculaSalario())
console.log(empregado2)
console.log(empregado2.calculaSalario())