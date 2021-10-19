const input = document.querySelector('input');
const frutas = document.querySelectorAll('li');

input.addEventListener('keydown', function (event) {

    if (event.code === 'Enter') {
        if (input.value === '') {
            frutas.forEach(y => {
                y.classList.remove('escondido');
            })
        } else {
            frutas.forEach(X => {
                if (X.textContent !== input.value) {
                    X.classList.add('escondido');
                }
            })
            input.value = '';
        }
    }

})

