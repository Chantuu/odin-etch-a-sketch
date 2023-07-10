const sketch = document.querySelector('.container.sketch');
let divCount = 0;

function cleanSketch() {
    const divs = document.querySelectorAll('.container.sketch div');
    console.log(divs);
    
    if (divs.length > 0) {
        for (const div of divs) {
            sketch.removeChild(div);
        }
    } else {
        alert('Sketch is already clean');
    }
}

function populateSketch(size) {
    for (let i=0; i<size*size; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', e => {
            let color = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = '#' + color;
        })
        
        div.style.width = 600/(size) + 'px';
        div.style.height = 400/(size) + 'px';
        
        sketch.appendChild(div);
    }
}

function chooseSizeBTN() {
    divCount = +prompt('Please choose grid size from 1 to 40')
    if (divCount <= 40 && divCount >= 1) {
        populateSketch(divCount);
    } else {
        alert('Incorrect input. Please try again!');
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', e => {
    if (e.target.innerText === 'Choose Size') {
        if (sketch.hasChildNodes()) cleanSketch();
        chooseSizeBTN();  
    } else if (e.target.innerText === 'Reset') {

    } else if (e.target.innerText === 'Erase') {
        cleanSketch();
    }
}));