let iniciar = confirm("Deseja calcular a média do aluno?");

if (iniciar) {
    let nome = prompt("Digite o nome do aluno:");
    
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    
    let media = (nota1 + nota2 + nota3) / 3;
    
    alert("Aluno: " + nome + "\nMédia: " + media.toFixed(2));
}
