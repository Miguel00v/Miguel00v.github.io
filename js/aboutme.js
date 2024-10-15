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