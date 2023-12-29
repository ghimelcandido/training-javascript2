const listaDeAlunos = [
    {
        nome: "João",
        nota1: 6,
        nota2: 7
    },
    {
        nome: "Maria",
        nota1: 10,
        nota2: 10 
    },
    {
        nome: "Fabricio",
        nota1: 9,
        nota2: 9 
    }
]

function resultadoMedia(nota1, nota2){
    media = (nota1 + nota2) / 2
    return media
}

for (let alunos of listaDeAlunos) {
    let resultadoFinal = resultadoMedia(alunos.nota1, alunos.nota2)
    let aprovadoOuReprovado = resultadoFinal > 7 ? `Aprovado` : `Reprovado`

    alert(`A media do aluno(a) ${alunos.nome} é: ${resultadoFinal}. Você foi ${aprovadoOuReprovado} `)
}
