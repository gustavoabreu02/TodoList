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
        li.innerText = input.value;
        ol.appendChild(li);
        input.value = '';
    }
}
criarBotao ();