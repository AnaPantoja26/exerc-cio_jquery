$('form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#tarefa-nova').val();
        const novoItem = $('<li style="display: none"><li/>');
        
        $(`<a href= "${tarefa}"</a>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    })