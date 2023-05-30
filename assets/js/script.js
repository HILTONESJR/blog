// Adicione este código JavaScript para aplicar as animações quando a página for carregada

// Função para verificar se um elemento está visível na tela
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Função para aplicar as animações quando o elemento estiver visível
  function animateElements() {
    var elements = document.querySelectorAll('.fade-in, .slide-in');
    elements.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('animate');
      }
    });
  }
  
  // Evento de scroll para verificar quando os elementos estão visíveis
  window.addEventListener('scroll', animateElements);
  