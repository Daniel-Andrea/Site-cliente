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

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário padrão

    // Coletando os dados do formulário
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const procedimento = document.getElementById('procedimento').value.trim();

    // Verificando se todos os campos estão preenchidos
    if (!username || !email || !whatsapp || !procedimento) {
        alert("Por favor, preencha todos os campos.");
        return; // Se algum campo estiver vazio, não envia
    }

    // Pegando o número de WhatsApp do atributo data do formulário
    const formElement = document.getElementById('form');
    const whatsappNumber = formElement.getAttribute('data-whatsapp-number'); // Obtém o número do HTML

    // Criando a mensagem para o WhatsApp
    const message = `Nome Completo: ${username}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nProcedimento: ${procedimento}`;

    // Construindo a URL do WhatsApp com o número dinâmico
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirecionar para o WhatsApp
    window.open(whatsappURL, '_blank');
});
