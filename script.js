$(document).ready(function() {
    // Adiciona evento de clique aos itens da lista
    $('ul#lista-tarefas').on('click', 'li', function() {
        if ($(this).hasClass('completa')) {
            $(this).removeClass('completa'); // Remove a classe se já estiver presente
        } else {
            $(this).addClass('completa'); // Adiciona a classe se não estiver presente
        }
    });

    // Adiciona evento de envio ao formulário
    $('#form-tarefas').on('submit', function(event) {
        event.preventDefault();
        
        const tarefaInput = $('#tarefa').val();
        $('ul#lista-tarefas').append(`<li>${tarefaInput}</li>`);
        
        limparForm();
    });

    function limparForm() {
        const form = $('#form-tarefas')[0]; 
        form.reset();
    }
});
