const btnInscrever = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const btnSim = document.querySelector('.confirmar');
const btnModal = document.querySelectorAll('.modal button');


btnInscrever.addEventListener('click', inscrever)


function inscrever (event) {
    
    const btnClicado = event.target;
    btnClicado.textContent = 'INSCRITO';
    btnClicado.classList.add('inscrito');

    btnClicado.removeEventListener('click', inscrever);

    btnClicado.addEventListener('click', desinscrever);

}

function  desinscrever (event){
    const btnClicado = event.target;

    modal.classList.remove('escondido');

    btnClicado.removeEventListener('click', desinscrever);

    btnClicado.addEventListener('click', inscrever);
}


btnSim.addEventListener('click', function(event){
   
    btnInscrever.textContent = 'INSCREVER-SE';
    btnInscrever.classList.remove('inscrito');
   
    btnInscrever.addEventListener('click', inscrever)
})

btnModal.forEach( x => {
    x.addEventListener('click', function(event){
        modal.classList.add('escondido');
    })
})
