document.addEventListener('DOMContentLoaded', function() {
  // Contatos Emergenciais
  const emergencyBtn = document.getElementById('emergency-btn');
  const emergencyContacts = document.getElementById('emergency-contacts');
  const toggleIcon = document.querySelector('.toggle-icon');

  emergencyBtn.addEventListener('click', function() {
    // Alternar visibilidade
    emergencyContacts.classList.toggle('hidden');
    
    // Animação do ícone
    if (emergencyContacts.classList.contains('hidden')) {
      toggleIcon.classList.remove('fa-chevron-up');
      toggleIcon.classList.add('fa-chevron-down');
      emergencyBtn.style.borderRadius = '15px';
    } else {
      toggleIcon.classList.remove('fa-chevron-down');
      toggleIcon.classList.add('fa-chevron-up');
      emergencyBtn.style.borderRadius = '15px 15px 0 0';
    }
  });

  // Efeitos nos links
  const appLinks = document.querySelectorAll('.app-link');
  
  appLinks.forEach(link => {
    // Efeito hover
    link.addEventListener('mouseenter', () => {
      const icon = link.querySelector('.link-icon');
      icon.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    link.addEventListener('mouseleave', () => {
      const icon = link.querySelector('.link-icon');
      icon.style.transform = 'scale(1) rotate(0)';
    });
    
    // Feedback ao clicar
    link.addEventListener('mousedown', () => {
      link.style.transform = 'translateY(-5px) scale(0.98)';
    });
    
    link.addEventListener('mouseup', () => {
      link.style.transform = 'translateY(-8px) scale(1)';
    });
  });

  // Feedback visual para mobile
  document.addEventListener('touchstart', function() {}, { passive: true });
});

// Verificar se é PWA instalado
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('Executando como PWA instalado');
}