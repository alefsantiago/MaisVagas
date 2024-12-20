document.addEventListener('DOMContentLoaded', () => {
  const myModal = document.getElementById('myModal');
  const myInput = document.getElementById('myInput');
 

  if (myModal && myInput) {
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus();
    });
  }
});


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then((registration) => {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch((error) => {
        console.log('Erro ao registrar o Service Worker:', error);
      });
  });
}

let deferredPrompt;
const installButton = document.getElementById('install-button');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;

  if (installButton) {
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        console.log(choiceResult.outcome);
        deferredPrompt = null;
      });
    });
  }
});


