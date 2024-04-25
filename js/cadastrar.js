let itens = [];

document.querySelector("#form").addEventListener("submit", function(event)  {

    event.preventDefault();

    var nome = document.querySelector("#nome").value;
    var time = document.querySelector("#time").value;
    var gols = document.querySelector("#gols").value;
    var assistencias = document.querySelector("#assistencias").value;
    var urlFoto = document.querySelector("#foto").value;

    
    itens.push({'nome': nome, 'time': time, 'gols':gols, 'assistencias':assistencias, 'foto': urlFoto});

    setItensBD();

    window.alert("Jogador salvo!")
})

function loadItens(){
    itens = getItensBD();
}

const getItensBD = () => JSON.parse(localStorage.getItem('jogadores')) ?? [];
const setItensBD = () => localStorage.setItem('jogadores', JSON.stringify(itens));

loadItens();