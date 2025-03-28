document.addEventListener('DOMContentLoaded', function() {
  // Contatos Emergenciais
  const emergencyBtn = document.getElementById('emergency-btn');
  const emergencyContacts = document.getElementById('emergency-contacts');
  
  emergencyBtn.addEventListener('click', function() {
    emergencyContacts.classList.toggle('hidden');
    const icon = this.querySelector('.bi-chevron-down');
    icon.classList.toggle('rotate');
    
    if (emergencyContacts.classList.contains('hidden')) {
      this.innerHTML = `<i class="bi bi-phone-vibrate"></i> Contatos Emergenciais <i class="bi bi-chevron-down"></i>`;
    } else {
      this.innerHTML = `<i class="bi bi-phone-vibrate"></i> Ocultar Contatos <i class="bi bi-chevron-up"></i>`;
    }
  });

  // Efeito nos cards
  const linkCards = document.querySelectorAll('.link-card');
  linkCards.forEach(card => {
    card.addEventListener('mousedown', function() {
      this.style.transform = 'translateY(0)';
    });
    
    card.addEventListener('mouseup', function() {
      this.style.transform = 'translateY(-5px)';
    });
  });
});