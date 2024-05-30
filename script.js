document.getElementById('formulario').addEventListener('submit', function (event) {
    //<----------------------------------- Evita o envio do formulário ---------------------------------------------->
    event.preventDefault();

    //<----------------------------------- Captura os dados dos campos de texto ------------------------------------->
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;

    //<---------------------------------- Captura os dados do radio button selecionado ------------------------------>
    const naturezaCargo = document.querySelector('input[name="natureza_cargo"]:checked').value;

    //<---------------------------------- Captura os dados dos checkboxes selecionados ------------------------------>
    const areasInteresse = [];
    document.querySelectorAll('input[name="area_interesse"]:checked').forEach(function (checkbox) {
        areasInteresse.push(checkbox.value);
    });

    //<---------------------------------- Verifica se pelo menos um checkbox foi marcado ---------------------------->
    if (areasInteresse.length === 0) {
        alert("Você deve marcar ao menos uma área de interesse.");
        return;
    }

    //<---------------------------------- Captura o texto do mini-currículo ----------------------------------------->
    const miniCurriculo = document.getElementById('mini_curriculo').value;

    //<---------------------------------- Cria um objeto com os dados capturados ------------------------------------>
    const dados = {
        nome: nome,
        endereco: endereco,
        cidade: cidade,
        estado: estado,
        naturezaCargo: naturezaCargo,
        areasInteresse: areasInteresse,
        miniCurriculo: miniCurriculo
    };

    //<---------------------------------- Exibe os dados no console ------------------------------------------------->
    console.log(dados);
});
