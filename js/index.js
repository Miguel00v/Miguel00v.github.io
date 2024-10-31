 //Criação da animação
 // Seleciona o logotipo e o link
 const logoLink = document.getElementById('linkImagemLogo');
 const mainContent = document.getElementById('mainContent'); // Container for main content
 const navContent = document.getElementById('quoteNav');
 const footerContent = document.getElementById('footerContent');

 // Verifica se o elemento foi encontrado
 if (logoLink) {
     // Função para adicionar a classe que ativa a animação
     function animateLogo() {
         logoLink.classList.add('active'); // Ativa a animação ao adicionar a classe
     }

     // Inicia a animação após o DOM estar completamente carregado
     document.addEventListener('DOMContentLoaded', animateLogo);

     // Ouve o evento 'animationend' para o logotipo
     logoLink.addEventListener('animationend', function() {
         // Habilita a interação com o link após a animação
         logoLink.style.pointerEvents = 'all';
         // Remove 'hidden' and add 'fade-in' class for opacity effect
         mainContent.style.display = 'flex';
         mainContent.classList.add('fade-in'); // Add fade-in class
         navContent.style.display = 'flex';
         navContent.classList.add('fade-in');
         footerContent.style.display = 'block';
         footerContent.classList.add('fade-in');

         // Use a timeout to add the 'active' class after the element is displayed
         setTimeout(() => {
             mainContent.classList.add('active'); // Trigger opacity transition
             navContent.classList.add('active');
             footerContent.classList.add('active');
         }, 10); // Slight delay to ensure it applies after removing hidden
     });
 } 

 // Adiciona um event listener para detectar tentativas de rolagem
 window.addEventListener('wheel', function(event) {
    // Verifica a direção da rolagem (para cima ou para baixo)
    if (event.deltaY !== 0) { // Se houver rolagem
        setTimeout(() => {
            window.location.href = "aboutme.html"; // Redireciona para outra página
        }, 500);
    }
})