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

//requisito 10 
function apagaTudo () {
    let button = document.createElement('button');
    button.id = 'apaga-tudo';
    button.innerText = 'Apagar Tudo'
    main.appendChild(button)
    button.addEventListener('click', evento3);
    function evento3 () {
    let section = document.querySelector('#lista-tarefas').innerHTML = '';

    }
}
apagaTudo ();

//requisito 11 
function removerFinalizados () {
    let button = document.createElement('button');
    button.id = 'remover-finalizados';
    button.innerText = 'Remover Finalizados'
    main.appendChild(button);
    button.addEventListener('click', evento4);
    function evento4 () {
        let li = document.querySelectorAll('.item');
        for (let i = 0; i < li.length; i += 1) {
            if (li[i].className == 'item completed') {
                li[i].remove();
            }
        }
        }
}
removerFinalizados()

//requisito 12 
function salvarTarefas () {
    let button = document.createElement('button');
    button.id = 'salvar-tarefas';
    button.innerText = 'Salvar Tarefas'
    main.appendChild(button);
    button.addEventListener('click', evento5);
    function evento5 () {
    let li = document.querySelectorAll('.item');
    for (let i = 0; i < li.length; i += 1) {
        localStorage.setItem("valor", li[i]);
    dataGet();
        }
    }
}
salvarTarefas ();

//requisito 14
function removerSelecionados () {
    let button = document.createElement('button');
    button.id = 'remover-selecionado';
    button.innerText = 'Remover Selecionados'
    main.appendChild(button);
    button.addEventListener('click', evento6);
    function evento6 () {
        let li = document.querySelectorAll('.item');
        for (let i = 0; i < li.length; i += 1) {
            if (li[i].style.backgroundColor == 'gray') {
                li[i].remove();
            }
        }
        }
}
removerSelecionados ();

