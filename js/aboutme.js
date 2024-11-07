window.addEventListener('load', () => {
    const body = document.querySelector('body');
    body.classList.add('fade-in'); // Adiciona a classe fade-in ao corpo
});

//Scrool reveal
ScrollReveal().reveal('.content', {
    duration: 2000,  // Duração da animação (em milissegundos)
    distance: '10em', // Distância que o elemento se moverá
    origin: 'bottom', // Origem da animação (bottom, top, left, right)
    reset: true     // Se a animação deve acontecer sempre que o elemento reaparecer na tela
  });

//Efeito de fade in para os paragrafos da section interests
window.addEventListener('scroll', function() {
    const interestsSection = document.getElementById('interestsSection');
    const sectionPosition = interestsSection.getBoundingClientRect().top; // Posição da seção em relação à parte superior da tela
    const screenHeight = window.innerHeight; // Altura da janela do navegador

    // Verifica se a seção está na janela de visualização
    if (sectionPosition < screenHeight * 0.8) { // A seção entra em foco quando está a 80% da altura da janela
        interestsSection.style.opacity = 1; // Aplica opacidade 1 para fazer a seção aparecer
    } else {
        interestsSection.style.opacity = 0; // Mantém a opacidade 0 quando a seção não está em foco
    }
});

//Efeito de fade in para os paragrafos da section who am i
window.addEventListener('DOMContentLoaded', () => {
    const paragrafo = document.querySelectorAll('.pEffect');
    setTimeout(() => {
        paragrafo.forEach(p => {
            p.classList.add('fade-in'); // Adiciona a classe fade-in ao parágrafo
        });
    }, 2000); // Ajuste o tempo conforme desejado
});

//Efeito de fade para o footer
window.addEventListener('scroll', function() {
    // Seleciona todos os elementos com a classe 'entranceFooter'
    const entranceSections = document.querySelectorAll('.entranceFooter');
    
    entranceSections.forEach(function(section) {
        const sectionPosition = section.getBoundingClientRect().top; // Posição da seção em relação à parte superior da tela
        const screenHeight = window.innerHeight; // Altura da janela do navegador

        // Verifica se a seção está visível na janela de visualização
        if (sectionPosition < screenHeight * 1) { // A seção entra em foco quando está a 80% da altura da janela
            section.classList.add('fade-in'); // Adiciona a classe 'visible' para fazer o fade-in
        } else {
            section.classList.remove('fade-in'); // Remove a classe 'visible' quando a seção não está visível
        }
    });
});

//Exibir o modal
function showDetails(button) {
    // Obtém o título e o link dos atributos data-* do botão
    const title = button.getAttribute("data-title");
    const link = button.getAttribute("data-link");

    // Define o título e o link no modal
    document.getElementById("menuTitle").textContent = title;
    document.getElementById("menuLink").href = link;

    // Exibe o modal com flex
    const modal = document.getElementById("floatingMenu");
    modal.style.display = "flex";
}
//Fechar o modal
function closeMenu() {
    document.getElementById("floatingMenu").style.display = "none";
}

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("floatingMenu");
    if (event.target === modal) {
        closeMenu();
    }
}

//Certifica que o modal está escondido qnd a página é iniciada
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("floatingMenu").style.display = "none";
});

//Efeito de entrada para as divs de section contact me, nomeadamente para a div formas de contacto
window.addEventListener('scroll', function() {
    // Seleciona todos os elementos com a classe 'entranceLeft'
    const entranceSections = document.querySelectorAll('.entranceLeft');
    
    entranceSections.forEach(function(section) {
        const sectionPosition = section.getBoundingClientRect().top; // Posição da seção em relação à parte superior da tela
        const screenHeight = window.innerHeight; // Altura da janela do navegador

        // Verifica se a seção está visível na janela de visualização
        if (sectionPosition < screenHeight * 0.8) { // A seção entra em foco quando está a 80% da altura da janela
            section.classList.add('visible'); // Adiciona a classe 'visible' para fazer o efeito de entrada
        } else {
            section.classList.remove('visible'); // Remove a classe 'visible' quando a seção não está visível
        }
    });
});

//Efeito de entrada para as divs de section contact me, nomeadamente para a div de form de contacto
window.addEventListener('scroll', function() {
    // Seleciona todos os elementos com a classe 'entranceRight'
    const entranceSections = document.querySelectorAll('.entranceRight');
    
    entranceSections.forEach(function(section) {
        const sectionPosition = section.getBoundingClientRect().top; // Posição da seção em relação à parte superior da tela
        const screenHeight = window.innerHeight; // Altura da janela do navegador

        // Verifica se a seção está visível na janela de visualização
        if (sectionPosition < screenHeight * 0.8) { // A seção entra em foco quando está a 80% da altura da janela
            section.classList.add('visible'); // Adiciona a classe 'visible' para fazer o efeito de entrada
        } else {
            section.classList.remove('visible'); // Remove a classe 'visible' quando a seção não está visível
        }
    });
});

//Criação e tratamento do formulário de contacto
//Sanatização dos dados de envio
$(document).ready(function() {
    $('#myContactForm').on('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obter os valores dos campos pelo atributo name
        var nome_input = $('input[name="name"]').val().trim();
        var email_input = $('input[name="email"]').val().trim();
        var phoneNumber_input = $('input[name="phone_number"]').val().trim();
        var message = $('input[name="message"]').val().trim(); // Assumindo que "message" é um textarea

        // Validação para o campo nome
        if (nome_input.length < 3 || !/^[A-Za-z\s]+$/.test(nome_input)) {
            alert('Por favor, insira um nome válido! O nome deve ter pelo menos 3 caracteres e apenas letras.');
            return; // Interrompe a execução da função
        } else {
            var nome = nome_input;
        }

        // Validação de email
        if (!/\S+@\S+\.\S+/.test(email_input)) {
            alert('Por favor, insira um email válido!');
            return;
        } else {
            var email = email_input;
        }

        // Validação do número de telefone
        var pattern_phone = /^(?:\+351|00351)?(?:\d{9}|\d{3}[\s-]?\d{3}[\s-]?\d{3})$/;
        if (!pattern_phone.test(phoneNumber_input)) {
            alert('Por favor, insira um número de telefone válido!');
            return;
        } else {
            var phone_number = phoneNumber_input;
        }

        // Se passar em todas as validações, enviar o formulário via Ajax
        if (nome && email && phone_number && message) {
            $.ajax({
                url: "https://formspree.io/f/xrbgqgdy",
                method: "POST",
                dataType: "json",
                data: {
                    email: email,
                    nome: nome,
                    telemovel: phone_number,
                    message: message
                },
                success: function(response) {
                    alert('Mensagem enviada com sucesso!');
                    // Limpar os campos do formulário
                    $('#myContactForm')[0].reset();
                },
                error: function(error) {
                    alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
                }
            });
        }
    });
});