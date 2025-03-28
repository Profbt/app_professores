document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const emergencyBtn = document.getElementById('emergency-btn');
    const emergencyContacts = document.getElementById('emergency-contacts');
    const govprLoginBtn = document.getElementById('govpr-login');
    const pontoLink = document.getElementById('ponto-link');
    const rcoLink = document.getElementById('rco-link');
    const contrachequeLink = document.getElementById('contracheque-link');
  
    // Estado de login (simulado)
    let isLoggedIn = false;
  
    // Toggle dos contatos de emergência
    emergencyBtn.addEventListener('click', function() {
      emergencyContacts.classList.toggle('hidden');
      this.textContent = emergencyContacts.classList.contains('hidden') 
        ? '🆘 Contatos Emergência' 
        : '⬆️ Fechar Contatos';
    });
  
    // Simulação de login com GovPR
    govprLoginBtn.addEventListener('click', function() {
      // Na implementação real, isso seria a chamada à API de autenticação
      isLoggedIn = true;
      alert('Login realizado com sucesso via GovPR! Agora você pode acessar os sistemas integrados.');
      updateLinksAfterLogin();
    });
  
    // Atualiza os links após login
    function updateLinksAfterLogin() {
      if (isLoggedIn) {
        // Adiciona parâmetros de autenticação simulados
        pontoLink.href = 'https://registropontoseed.pr.gov.br?token=simulated';
        rcoLink.href = 'https://rco.paas.pr.gov.br?token=simulated';
        contrachequeLink.href = 'https://appsouparana.paas.pr.gov.br/login?token=simulated';
        
        // Feedback visual
        const links = [pontoLink, rcoLink, contrachequeLink];
        links.forEach(function(link) {
          link.style.backgroundColor = '#e8f4fc';
          link.style.borderLeft = '4px solid #2b5797';
        });
      }
    }
  
    // Verificar se já está logado ao carregar (simulação)
    // Na implementação real, verificar token/cookie
    if (localStorage.getItem('fakeLogin')) {
      isLoggedIn = true;
      updateLinksAfterLogin();
    }
  });