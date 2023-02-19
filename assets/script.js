const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

// Creation divs 'dot' in 'dots'
let dots = document.querySelector('.dots');
for (let i in slides) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dots.appendChild(dot);
}


let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');
let i = 0;
let dotDiv = document.getElementsByClassName('dot');
dotDiv[i].classList.add('dot_selected');   // First dot visible as soon as the page is loaded


function dotChangeRight() {
    if (i > 0 && i < dotDiv.length) {
        dotDiv[i].classList.add('dot_selected');
        dotDiv[i - 1].classList.remove('dot_selected');
    }
    else if (i == 0) {
        dotDiv[0].classList.add('dot_selected');
        dotDiv[dotDiv.length-1].classList.remove('dot_selected');
    }
}

function dotChangeLeft() {
    if (i == dotDiv.length-1) {
        dotDiv[dotDiv.length-1].classList.add('dot_selected');
        dotDiv[0].classList.remove('dot_selected');
    }
    else if (i < dotDiv.length - 1) {
        dotDiv[i].classList.add('dot_selected');
        dotDiv[i + 1].classList.remove('dot_selected');
    }
}


function moveRight() {
    if (i == slides.length - 1) {
        i = 0;
    } else {
        i++;
    }
}

function moveLeft() {
    if (i == 0) {
        i = slides.length - 1;
    } else {
        i--;
    }
}


function changeImage() {
    let img = document.querySelector('.banner-img');
    img.src = "assets/images/slideshow/" + slides[i].image;
}


function changeText() {
    let text = document.querySelector('#banner p');
    text.innerHTML = slides[i].tagLine;
}


// Click Events with all functions
arrowLeft.addEventListener('click', function () {
    moveLeft();
    changeImage();
    dotChangeLeft();
    changeText();
});

arrowRight.addEventListener('click', function () {
    moveRight();
    changeImage();
    dotChangeRight();
    changeText();
});