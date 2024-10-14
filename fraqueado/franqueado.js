function nextStep(step) {
    // Obtém o formulário atual
    const currentForm = document.querySelector(`#step${step - 1}`);

    // Verifica se todos os campos do formulário atual estão preenchidos
    if (validateForm(currentForm)) {
        // Esconde o formulário atual e mostra o próximo
        currentForm.style.display = "none";
        const nextForm = document.querySelector(`#step${step}`);
        nextForm.style.display = "block";
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}

function validateForm(form) {
    // Obtém todos os inputs, selects e textareas do formulário
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    // Verifica se algum campo obrigatório está vazio
    for (let input of inputs) {
        if (!input.value) {
            return false; // Retorna falso se algum campo estiver vazio
        }
    }
    return true; // Retorna verdadeiro se todos os campos estiverem preenchidos
}

function prevStep(step) {
    // Obtém o formulário atual e o anterior
    const currentForm = document.querySelector(`#step${step}`);
    const prevForm = document.querySelector(`#step${step - 1}`);
    
    // Esconde o formulário atual e mostra o anterior
    currentForm.style.display = "none";
    prevForm.style.display = "block";
}

function submitForm() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const descricao = document.getElementById('descricao').value;

    const message = `Olá, tudo bem? Meu nome é: ${nome}. Meu e-mail é: ${email}. Enviei o formulário para o seu email. Quero saber mais sobre a sessão estratégica.`;

    const whatsappLink = `https://wa.me/559991959590?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
}
function prevStep(step) {
    // Esconde o formulário atual e mostra o anterior
    const currentForm = document.querySelector(`#step${step}`);
    const prevForm = document.querySelector(`#step${step - 1}`);
    
    currentForm.style.display = "none"; // Esconde o formulário atual
    prevForm.style.display = "block";    // Mostra o formulário anterior
}
