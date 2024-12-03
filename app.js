document.addEventListener('DOMContentLoaded', () => {
  const myModal = document.getElementById('myModal');
  const myInput = document.getElementById('myInput');

  if (myModal && myInput) {
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus();
    });
  }
});

    // Registrar o Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
          navigator.serviceWorker.register('/service-worker.js')
              .then((registration) => {
                  console.log('Service Worker registrado com sucesso:', registration);
              })
              .catch((error) => {
                  console.log('Erro ao registrar o Service Worker:', error);
              });
      });
  }

  // Gerenciar o evento "beforeinstallprompt" para permitir a instalação do PWA
  let deferredPrompt;
  const installButton = document.getElementById('install-button');

  window.addEventListener('beforeinstallprompt', (event) => {
      // Prevenir o comportamento padrão do navegador
      event.preventDefault();
      // Armazenar o evento para ser disparado quando o usuário clicar no botão de instalação
      deferredPrompt = event;

      // Exibir o botão de "Adicionar à Tela Inicial"
      if (installButton) {
          installButton.style.display = 'block';
      }

      // Ao clicar no botão de instalação
      installButton.addEventListener('click', () => {
          // Mostrar o prompt de instalação
          deferredPrompt.prompt();

          // Esperar pela escolha do usuário
          deferredPrompt.userChoice.then((choiceResult) => {
              console.log(choiceResult.outcome);
              deferredPrompt = null;  // Limpar o evento após o prompt
          });
      });
  });