// retry.js

const retryBtn = document.getElementById('retryBtn');
const loading  = document.getElementById('loading');
const errorMsg = document.getElementById('errorMsg');

retryBtn.addEventListener('click', () => {
  retryBtn.style.display = 'none';
  errorMsg.textContent    = '';
  loading.style.display   = '';
  loadUsers();  // api.js içindeki fonksiyonu çağır
});
