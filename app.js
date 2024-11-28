const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// install.js
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // Previne a janela de instalação automática
  e.preventDefault();
  deferredPrompt = e;

  // Exibe um botão personalizado para o usuário
  const installButton = document.getElementById('installButton');
  installButton.style.display = 'block';

  installButton.addEventListener('click', () => {
    // Exibe o prompt de instalação
    deferredPrompt.prompt();

    // Espera a resposta do usuário
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação');
      } else {
        console.log('Usuário rejeitou a instalação');
      }
      deferredPrompt = null;
    });
  });
});
