//Trabalhando com arrau e laço de repetição do..while

const alunos = [
    {aluno: 'Henrique', nota: 8},
    {aluno: 'Beatriz', nota: 10},
    {aluno: 'Camilo', nota: 1},
    {aluno: 'Astolfo', nota: 0}
]

let index = 0;
let SomaDasNotas = 0;
let totalAlunos = alunos.length;

//Utilizando laço de repetição

do {
    SomaDasNotas += alunos[index].nota;
    index++;

} while(index<totalAlunos)

let media = SomaDasNotas/totalAlunos;
console.log("\nA média da turma é: " + media);   