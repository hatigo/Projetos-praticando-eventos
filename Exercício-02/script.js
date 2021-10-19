 const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
     input.addEventListener('change', function(event){
        const inputModificado = event.target;
        if(inputModificado.value === inputModificado.dataset.resposta){
            inputModificado.classList.add('correto');
        }else {
            inputModificado.classList.remove('correto');
        }
     })
 });