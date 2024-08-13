let dados = [
    {
        titulo: "A culpa é das estrelas",
        autor: "John Green"
    },
    {
        titulo: "Como eu era antes de você",
        autor: "Jojo Moyes"
    },
    {
        titulo: "É assim que acaba",
        autor: "Colleen Hoover"
    },
    {
        titulo: "Jogos Vorazes",
        autor: "Suzane Collins"
    }
]

function add() {
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;

    dados.push({
        titulo: titulo,
        autor: autor
    })
    load();
}

const load = () =>
{
    let table = document.getElementById("table");
    
    table.innerHTML = `<tr>
    <td><b>Titulo</b></td>
    <td><b>Autor</b></td>
    </tr>
    `
    dados.forEach(livro =>
    {
        table.innerHTML += `<tr>
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
        </tr>
        `
    })
}

load()

