const sketch = document.querySelector('.container.sketch');
let divCount = 0;

function populateSketch(size) {
    for (let i=0; i<size*size; i++) {
        const div = document.createElement('div');
        div.style.width = 600/(size) + 'px';
        div.style.height = 400/(size) + 'px';
        sketch.appendChild(div);
    }
}

function chooseSizeBTN() {
    divCount = +prompt('Please choose even number from 1 to 64')
    if ((divCount%2 === 0 && divCount <= 64 && divCount > 1) || divCount === 1) {
        populateSketch(divCount);
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