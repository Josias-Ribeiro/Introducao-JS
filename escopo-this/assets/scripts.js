function calculaIdade (anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30
}

const pessoa2 = {
    nome: 'João',
    idade: 40
}

const animal = {
    nome :'Theo',
    idade:5, 
    raca: 'Maltes'
}

//No call, ele aplica na funçao calcula pessoa, usando o this do objeto
console.log(calculaIdade.call(pessoa2, 30))

// Semelhante ao call, mas no aplly o argumento é passado em array
console.log(calculaIdade.apply(pessoa1,[20]))