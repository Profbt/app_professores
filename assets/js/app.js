document.addEventListener('DOMContentLoaded', function() {
  // Elementos DOM
  const govprLoginBtn = document.getElementById('govpr-login');
  const loginStatus = document.getElementById('login-status');
  const pontoLink = document.getElementById('ponto-link');
  const rcoLink = document.getElementById('rco-link');
  const contrachequeLink = document.getElementById('contracheque-link');
  
  // Estado de login
  let isLoggedIn = false;

  // Simulação de login com GovPR
  govprLoginBtn.addEventListener('click', function() {
    // Simulando requisição de login
    simulateGovPRLogin()
      .then(() => {
        isLoggedIn = true;
        updateLoginStatus();
        updateConnectedLinks();
        showToast('Login realizado com sucesso!');
      })
      .catch(error => {
        showToast('Falha no login: ' + error.message, true);
      });
  });

  // Função de simulação de login
  function simulateGovPRLogin() {
    return new Promise((resolve, reject) => {
      // Simulando delay de rede
      setTimeout(() => {
        // Simulando 80% de chance de sucesso
        if (Math.random() > 0.2) {
          resolve();
        } else {
          reject(new Error('Serviço indisponível. Tente novamente mais tarde.'));
        }
      }, 1500);
    });
  }

  // Atualiza o status do login
  function updateLoginStatus() {
    if (isLoggedIn) {
      loginStatus.innerHTML = '<i class="fas fa-check-circle text-success me-2"></i>Você está logado via GovPR';
      govprLoginBtn.innerHTML = '<i class="fas fa-user-check me-2"></i>Conta Conectada';
      govprLoginBtn.classList.remove('btn-warning');
      govprLoginBtn.classList.add('btn-success');
    } else {
      loginStatus.innerHTML = '<i class="fas fa-exclamation-circle text-warning me-2"></i>Você não está logado';
      govprLoginBtn.innerHTML = '<i class="fas fa-sign-in-alt me-2"></i>Acessar com GovPR';
      govprLoginBtn.classList.add('btn-warning');
      govprLoginBtn.classList.remove('btn-success');
    }
  }

  // Atualiza os links conectados
  function updateConnectedLinks() {
    const connectedLinks = [pontoLink, rcoLink, contrachequeLink];
    
    connectedLinks.forEach(link => {
      if (isLoggedIn) {
        link.classList.add('connected-link');
        // Adiciona parâmetro fictício de token
        const originalHref = link.href.split('?')[0];
        link.href = originalHref + '?token=simulated_' + Math.random().toString(36).substring(2);
      } else {
        link.classList.remove('connected-link');
        // Remove parâmetros de autenticação
        link.href = link.href.split('?')[0];
      }
    });
  }

  // Mostra notificação toast
  function showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.className = `position-fixed bottom-0 start-50 translate-middle-x mb-3 p-3 rounded shadow ${
      isError ? 'bg-danger' : 'bg-success'
    }`;
    toast.style.zIndex = '1100';
    toast.innerHTML = `
      <div class="d-flex align-items-center">
        <i class="fas ${isError ? 'fa-exclamation-triangle' : 'fa-check-circle'} me-2"></i>
        <span>${message}</span>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, 5000);
  }

  // Inicialização
  updateLoginStatus();
});