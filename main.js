$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#inserir-tarefa').val();
        const novoItem = $(`<li>${novaTarefa}</li>`);        
        $(novoItem).appendTo('ul');
        $('li').click(function () {
            $(this).addClass("lista-tarefa");
        });

        $('#inserir-tarefa').val('');
});

});