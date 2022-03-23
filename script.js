//requisito 4
let main = document.querySelector('main');
function listaOl () {
    let section = document.createElement('section');
    main.appendChild(section);
    let ol = document.createElement('ol');
    ol.id = 'lista-tarefas';
    section.appendChild(ol);
}
listaOl ();

//requisto 5
function criarBotao () {
    let button = document.createElement('button');
    button.id = 'criar-tarefa';
    button.innerText = 'Adicionar'
    main.appendChild(button);
    button.addEventListener('click', adicionaTarefa);
    function adicionaTarefa () {
        let input = document.querySelector('input');
        let li = document.createElement('li');
        let ol = document.querySelector('#lista-tarefas');
        li.className = 'item'
        li.innerText = input.value;
        ol.appendChild(li);
        input.value = '';
    }
}
criarBotao ();


//requisito 7 
function mudarCorItem () {
    let ol = document.querySelector('#lista-tarefas');
    ol.addEventListener('click', evento);
    function evento () {
        let li = document.querySelectorAll('.item');
        for (let i = 0; i < li.length; i += 1) {
            li[i].style.backgroundColor = 'white'
        }
        event.target.style.backgroundColor = 'gray'
        ol.style.backgroundColor = 'white'
    }
}
mudarCorItem ();

//requisito 9
function riscaItem () {
    let ol = document.querySelector('#lista-tarefas');
        ol.addEventListener('dblclick', evento2);
        function evento2 () {
            if (event.target.className == 'item completed') {
                event.target.className = 'item'
            } else if (event.target.className == 'item') {
                event.target.className = 'item completed'
            } 
        }
    
}
riscaItem ();
