let itens = [];


function loadItens(){
    itens = getItensBD();

    debugger;
    
    const section = document.querySelector('section');
    
    var counter = 0;
    itens.forEach(item => {
        const article = document.createElement('article');
        article.classList.add('data');
        article.id = "article";
        
        const divInfo = document.createElement('div');
        
        const img = document.createElement('img');
        img.src = item.foto;
        img.classList.add('avatar');
        
        const titulo = document.createElement('h3');
        titulo.textContent = item.nome;
        
        divInfo.appendChild(img);
        divInfo.appendChild(titulo);

        const divStatsPlayers = document.createElement('div');

        //TIME
        const time = document.createElement('p');
        time.classList.add("row");
        time.textContent = "Time: " + item.time;
        divStatsPlayers.appendChild(time);

        //NOTA
        const nota = document.createElement('p');
        nota.classList.add("row");
        nota.textContent = "Nota: " + (((item.gols + item.assistencias) / 3) > 10 ? 10 : Math.round(((item.gols + item.assistencias) / 3)));
        divStatsPlayers.appendChild(nota);

        //GOLS
        const gols = document.createElement('p');
        gols.classList.add("row");
        gols.textContent = "Gols: " + item.gols;
        divStatsPlayers.appendChild(gols);

        //ASSISTENCIAS
        const assistencias = document.createElement('p');
        assistencias.classList.add("row");
        assistencias.textContent = "Assistências: " + item.assistencias;
        divStatsPlayers.appendChild(assistencias);
       
      
        article.appendChild(divInfo);
        article.appendChild(divStatsPlayers);
        
        const botaoApagar = document.createElement('button');
        botaoApagar.id = counter;

        botaoApagar.onclick = function() {
            debugger;
            removeItem(this.id);
        };
    
        botaoApagar.classList.add('pico-background-pink-600');
    
        const textoApagar = document.createTextNode('Apagar');
        
        botaoApagar.appendChild(textoApagar);
        
        article.appendChild(botaoApagar);
        
        section.appendChild(article);
        counter++;
})}


function removeItem(position)
{
    debugger;
    itens.splice(position, 1);
    setItensBD();
    const article = document.querySelectorAll('#article');

    for (let item = 0; item < article.length; item++) {
        
        articleItem = article[item];

        while (articleItem.firstChild) {
            articleItem.removeChild(articleItem.firstChild);
        }

        articleItem.remove();
        
    } 
    
    loadItens();
}

const getItensBD = () => JSON.parse(localStorage.getItem('jogadores')) ?? [];
const setItensBD = () => localStorage.setItem('jogadores', JSON.stringify(itens));

loadItens();