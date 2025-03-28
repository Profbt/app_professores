// Registrar Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registrado com sucesso:', registration.scope);
        })
        .catch(error => {
          console.log('Falha no registro do ServiceWorker:', error);
        });
    });
  }
  
  // Detectar se é iOS
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }
  
  // Mostrar prompt de instalação
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Mostrar botão de instalação (opcional)
    showInstallPrompt();
  });
  
  function showInstallPrompt() {
    if (!deferredPrompt) return;
    
    const installBtn = document.createElement('button');
    installBtn.className = 'install-btn';
    installBtn.innerHTML = '<i class="bi bi-download"></i> Instalar App';
    installBtn.onclick = () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        deferredPrompt = null;
      });
    };
    
    document.body.appendChild(installBtn);
  }
  
  // Configuração para iOS (PWA)
  if (isIOS()) {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (!isStandalone) {
      const iosInstallBanner = document.createElement('div');
      iosInstallBanner.className = 'ios-install-banner';
      iosInstallBanner.innerHTML = `
        <p>Instale este app no seu iPhone:</p>
        <ol>
          <li>Toque no ícone <i class="bi bi-upload"></i></li>
          <li>Selecione "Adicionar à Tela de Início"</li>
        </ol>
        <button class="close-btn"><i class="bi bi-x"></i></button>
      `;
      document.body.appendChild(iosInstallBanner);
      
      document.querySelector('.close-btn').addEventListener('click', () => {
        iosInstallBanner.remove();
      });
    }
  }

  // Adicionar esta função para detectar PWA instalado
function checkPWAInstallation() {
    window.addEventListener('appinstalled', () => {
      console.log('PWA instalado com sucesso!');
      localStorage.setItem('pwaInstalled', 'true');
    });
  
    if (window.matchMedia('(display-mode: standalone)').matches) {
      localStorage.setItem('pwaInstalled', 'true');
    }
  }
  
  // Inicializar
  checkPWAInstallation();