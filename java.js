let viewers = 15000;
let users = 600000;

updateCounter(document.getElementById('viewers'), viewers, 2000);
updateCounter(document.getElementById('users'), users, 3000);

function updateCounter(element, target, duration) {
    let start = 0;
    let stepTime = Math.abs(Math.floor(duration / target));
    let timer = setInterval(() => {
        start += 1;
        element.innerHTML = start;
        if (start >= target) {
            clearInterval(timer);
        }
    }, stepTime);
}

document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        users += 1;
        document.getElementById('users').innerHTML = users;
        document.getElementById('username').value = ''; 
        alert("Login realizado com sucesso!");
    } else {
        alert("Por favor, digite seu nome de usuário.");
    }
});

// Carrossel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    updateIndicators();
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
    resetInterval();
}

function setSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    resetInterval();
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 4000);
}

// Inicia o carrossel automaticamente
slideInterval = setInterval(() => {
    moveSlide(1);
}, 4000);

// Exibe o slide inicial
showSlide(currentSlide);

// Função para mostrar o slide atual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none'; // Exibe o slide atual e esconde os outros
    });
    updateIndicators(); // Atualiza os indicadores
}

// Função para mover para o slide anterior ou seguinte
function moveSlide(direction) {
    currentSlide += direction;} // Atualiza o índice do slide atual
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Volta para o último slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Volta para o primeiro slide
    }
   


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
    updateIndicators();
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function setSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const imagem = document.getElementById('imagemfinal');
    const mensagem = document.getElementById('mensagemfinal');

    imagem.addEventListener('mouseover', () => {
        imagem.classList.add('hover');
        mensagem.style.display = 'block';
    });

    imagem.addEventListener('mouseout', () => {
        imagem.classList.remove('hover');
        mensagem.style.display = 'none';
    });
});

document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});












