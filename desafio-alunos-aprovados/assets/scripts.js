const alunos =[
    {
        nome: 'Josias',
        nota: 10,
        turma: 1
    },
    {
        nome: 'Pedro',
        nota: 5,
        turma: 2
    },
    {
        nome: 'Maria',
        nota: 8,
        turma: 4
    },
    {
        nome: 'Gabriel',
        nota: 9,
        turma: 3
    }
]

function alunosAprovados(arr, media){
    let aprovados= []
    
    for (let i=0; i < arr.length; i++) {
        const {nota, nome} = arr[i];

        if (nota >= media){
            aprovados.push(nome)
        }    
    }

    return aprovados
}

console.log(alunosAprovados(alunos, 10))