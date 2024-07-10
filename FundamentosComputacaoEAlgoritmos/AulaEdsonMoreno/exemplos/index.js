console.log('Hello world')
console.log('Fundamentos de computação e algoritmos')

console.log('Função de par ou impar')

function integrador(limite){
    for(let i=0 ; i<limite ; i++){
        if(i%2==0){
            console.log(i+" : é par ")
        }else{
            console.log(i+" : é impar ")
        }
    }
}

integrador(10)