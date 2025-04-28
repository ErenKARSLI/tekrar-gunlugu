// api.js

const loading  = document.getElementById('loading');
const retryBtn = document.getElementById('retryBtn');
const errorMsg = document.getElementById('errorMsg');
const userList = document.getElementById('userList');

// Global kullanıcı verisi (pagination.js kullanacak)
window.usersGlobal = [];

/**
 * Kullanıcıları API’dan çekip listeye ekler
 */
async function loadUsers() {
  // Başlangıç hali
  loading.classList.add('spinner');
  loading.textContent = '';
  errorMsg.textContent = '';
  retryBtn.style.display = 'none';
  userList.innerHTML = '';

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Sunucudan veri alınamadı');

    const users = await res.json();
    window.usersGlobal = users;

    // Spinner’ı gizle
    loading.classList.remove('spinner');
    loading.style.display = 'none';

    // Pagination varsa kullan, yoksa direkt render
    if (typeof renderPage === 'function') {
      renderPage(1);
    } else {
      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} — ${user.email} — ${user.address.city}`;
        li.dataset.user = JSON.stringify(user);
        userList.appendChild(li);
      });
    }
  } catch (err) {
    loading.classList.remove('spinner');
    loading.style.display = 'none';
    errorMsg.textContent = err.message;
    retryBtn.style.display = '';
  }
}

// global aç
window.loadUsers = loadUsers;

// Sayfa açılınca çağır
document.addEventListener('DOMContentLoaded', loadUsers);
