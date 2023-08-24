    const numeroAInput = document.getElementById('numeroA');
    const numeroBInput = document.getElementById('numeroB');
    const submitButton = document.getElementById('submitButton');
    const mensagemDiv = document.getElementById('mensagem');
    //pegando as referencias dos elementos html
    
    submitButton.addEventListener('click', function () {
        //ao clicar no mouse...
        const numeroA = parseFloat(numeroAInput.value);
        //criamos uma variavel com o numero de numeroA
        const numeroB = parseFloat(numeroBInput.value);
        //criamos uma variavel com o numero de numeroB

        // Verificando se o número B é maior que o número A.
        if (numeroB > numeroA) {
            mensagemDiv.innerHTML = 'Formulário válido: Número B é maior que Número A.';
            mensagemDiv.style.color = 'green';
        } else {
            mensagemDiv.innerHTML = 'Formulário inválido: Número B deve ser maior que Número A.';
            mensagemDiv.style.color = 'red';
        }
    });