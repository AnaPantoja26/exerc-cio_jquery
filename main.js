    const form = document.getElementById('form-lista');
    const novaTarefa = [];
    let linhas = '';

    form.addEventListener('submit', function(e) {
        e.preventDefault();

    addTarefa();
    atualizaTarefa();

    })

    function addTarefa() {
        const inputTarefa = document.getElementById('tarefa-nova');

        if(novaTarefa.includes(inputTarefa.value)) {
            alert(`a tarefa ${inputTarefa.value} já foi inserida!`);
        }else {
            novaTarefa.push(inputTarefa.value);

            let linha = `<ul>`;
            linha +=`<li> ${inputTarefa.value}`;
            linha +=`</ul>`;

            linhas += linha;
        }

    inputTarefa.value = '';
    }

    function atualizaTarefa() {
        const tabelaMatriz = document.querySelector('ul');
        tabelaMatriz.innerHTML = linhas;
    }

    const tabelaMatriz = document.querySelector('ul');
    tabelaMatriz.addEventListener('click', function(e){
        if (e.target.classList.contains('checked')){
            e.target.classList.remove('checked');
        }else{
            e.target.classList.add('checked');
        }
    })