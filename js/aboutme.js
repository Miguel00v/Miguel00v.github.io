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

window.addEventListener('DOMContentLoaded', () => {
    const paragrafo = document.querySelectorAll('.pEffect');
    setTimeout(() => {
        paragrafo.forEach(p => {
            p.classList.add('fade-in'); // Adiciona a classe fade-in ao parágrafo
        });
    }, 2000); // Ajuste o tempo conforme desejado
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