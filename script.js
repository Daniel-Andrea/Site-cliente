// Menu toggle para dispositivos móveis
let menuList = document.getElementById("menuList");

function toggleMenu() {
    menuList.classList.toggle('show'); // Alterna a classe show

    if (menuList.classList.contains('show')) {
        menuList.style.maxHeight = "300px"; // Define a altura ao abrir
    } else {
        menuList.style.maxHeight = "0px"; // Define a altura ao fechar
    }
}


// Carrossel de cartões
let currentSlide = 0;
const cardsToShowDesktop = 4; // Número de cartões a serem mostrados no desktop
const cardsToShowMobile = 1;   // Número de cartões a serem mostrados no mobile
const totalCards = document.querySelectorAll('.carrossel-images .card').length;

function updateButtonState() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.disabled = currentSlide === 0;
    const maxSlides = window.innerWidth <= 600 ? totalCards - cardsToShowMobile : totalCards - cardsToShowDesktop;
    nextButton.disabled = currentSlide >= maxSlides;
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carrossel-images .card');

    // Restringe os índices para evitar ultrapassagem
    if (index >= totalCards) {
        currentSlide = totalCards - 1; // Último card
    } else if (index < 0) {
        currentSlide = 0; // Primeiro card
    } else {
        currentSlide = index;
    }

    // Calcula o deslocamento
    const cardWidth = slides[0].clientWidth + (window.innerWidth <= 600 ? 0 : 20); // Largura do card
    const offset = -(Math.floor(currentSlide / (window.innerWidth <= 600 ? cardsToShowMobile : cardsToShowDesktop)) * (window.innerWidth <= 600 ? cardWidth : (cardsToShowDesktop * cardWidth)));
    document.querySelector('.carrossel-images').style.transform = `translateX(${offset}px)`;

    updateButtonState();
}

function moveSlide(step) {
    const increment = window.innerWidth <= 600 ? 1 : cardsToShowDesktop; // Incremento baseado no tamanho da tela

    // Adiciona um atraso antes de chamar showSlide
    setTimeout(() => {
        showSlide(currentSlide + step * increment);
    }, 300); // Ajuste o tempo conforme necessário (em milissegundos)
}

// Chama a função no início para definir o estado correto dos botões
updateButtonState();
showSlide(currentSlide);

// Para arrastar e mudar de cartões no celular
let touchStartX = 0;
let touchEndX = 0;
const threshold = 50; // Distância mínima para considerar um deslizar

const carouselContainer = document.querySelector('.carrossel-images');

carouselContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

carouselContainer.addEventListener('touchmove', (e) => {
    touchEndX = e.touches[0].clientX;
});

carouselContainer.addEventListener('touchend', () => {
    const distance = touchStartX - touchEndX;

    // Verifica se o arrasto ultrapassou o limite definido
    if (distance > threshold) {
        moveSlide(1); // Desloca para a esquerda (próximo card)
    } else if (distance < -threshold) {
        moveSlide(-1); // Desloca para a direita (card anterior)
    }
});








window.onload = function() {
    // Ajuste da imagem do desktop
    const desktopImage = document.getElementById('desktopImage');
    desktopImage.style.height = 'auto'; // Mantém a proporção

    // Ajuste da imagem do formulário
    const formDesktopImage = document.getElementById('formDesktopImage');
    formDesktopImage.style.height = 'auto'; // Mantém a proporção
};






// script.js

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach(el => observer.observe(el));
});


// script.js

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach(el => observer.observe(el));
});


// Função para verificar a visibilidade dos elementos
function checkVisibility() {
    const allDivs = document.querySelectorAll('div'); // Seleciona todas as divs
    const form = document.getElementById('agendamentoForm'); // Seleciona o formulário

    allDivs.forEach((div) => {
        const rect = div.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) { // Verifica se a div está visível
            div.style.opacity = 1; // Faz a div aparecer
            div.style.transform = 'translateX(0)'; // Move a div para sua posição original
        }
    });

    // Verifica se o formulário está visível
    const formRect = form.getBoundingClientRect();
    if (formRect.top < window.innerHeight && formRect.bottom >= 0) { // Se o formulário está visível
        form.style.opacity = 1; // Faz o form aparecer
        form.style.transform = 'translateX(0)'; // Move o form para sua posição original
    }
}




document.getElementById('agendarButton').addEventListener('click', function() {
    // Pega a unidade selecionada
    var unidadeSelecionada = document.getElementById('unidade').value;

    // Verifica se o usuário selecionou uma unidade
    if (unidadeSelecionada) {
        // Abre a página da unidade selecionada em uma nova aba
        window.open(unidadeSelecionada, '_blank');
    } else {
        // Exibe um alerta caso não tenha selecionado nenhuma unidade
        alert('Por favor, selecione uma unidade.');
    }
});


document.getElementById('trabalheConoscoButton').addEventListener('click', function() {
    // Defina o endereço de e-mail e o assunto
    var email = '@exemplo.com'; // Substitua pelo seu e-mail
    var assunto = 'Enviar currículo para trabalho';
    
    // Crie o link mailto
    var mailtoLink = `mailto:${email}?subject=${encodeURIComponent(assunto)}`;

    // Abra o link mailto em uma nova aba
    var newTab = window.open();
    newTab.location.href = mailtoLink;

    // Foca na nova aba
    newTab.focus();
});


// Adiciona a classe para a animação inicial
document.querySelectorAll('div').forEach((div) => {
    div.style.opacity = 0; // Define a opacidade inicial como 0
    div.style.transform = 'translateX(-100%)'; // Move a div para fora da tela à esquerda
    div.style.transition = 'opacity 1s ease, transform 1s ease'; // Transição mais lenta
});

const form = document.getElementById('agendamentoForm');
form.style.opacity = 0; // Define a opacidade inicial como 0
form.style.transform = 'translateX(-100%)'; // Move o form para fora da tela à esquerda
form.style.transition = 'opacity 1s ease, transform 1s ease'; // Transição mais lenta

// Adiciona o evento de scroll
window.addEventListener('scroll', checkVisibility);

// Chama a função ao carregar a página
checkVisibility();




