let divCount = 0;

function chooseSizeBTN() {
    divCount = +prompt('Please choose even number from 1 to 64')
    if ((divCount%2 === 0 && divCount < 64 && divCount > 1) || divCount === 1) {

    } else {
        alert('Incorrect input. Please try again!');
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', e => {
    if (e.target.innerText === 'Choose Size') {
        chooseSizeBTN();  
    } else if (e.target.innerText === 'Reset') {

    } else if (e.target.innerText === 'Erase') {

    }
}));