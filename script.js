// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Validação de formulário de contato
    const contactForm = document.querySelector('.contact-container form');
    contactForm.addEventListener('submit', function (event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Por favor, preencha todos os campos.');
            event.preventDefault();
        }
    });

    // Interatividade com o plano recomendado
    const recommendedPlan = document.querySelector('.plan .recommended');
    recommendedPlan.parentElement.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.05)';
    });
    recommendedPlan.parentElement.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });

    // Botão "Saber mais" em planos
    const planButtons = document.querySelectorAll('.plan-btn');
    planButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Mais informações sobre o plano: ' + this.previousElementSibling.textContent);
        });
    });

    // Simulação de verificação de domínio
    const domainForm = document.querySelector('.searchdomain-container form');
    domainForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const domainInput = document.getElementById('domain').value;

        if (domainInput === '') {
            alert('Por favor, insira um domínio.');
        } else {
            alert('O domínio "' + domainInput + '" está disponível!');
        }
    });
});