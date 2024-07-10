
//literais
const empregado = {
    salarioBase: 5000,
    valoHoraExtra: 100,
    qtdHoraExtras: 10,
    calculaSalario: function () {
        return this.salarioBase +(this.valoHoraExtra * this.qtdHoraExtras);
    }
}

console.log(empregado.calculaSalario())