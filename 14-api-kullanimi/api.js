const loading = document.getElementById('loading');
const userList = document.getElementById('userList');
const errorMsg = document.getElementById('errorMsg');

async function loadUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Sunucudan veri alınamadı');
    const users = await res.json();

    // Yükleniyor mesajını kaldır
    loading.style.display = 'none';

    // Kullanıcıları listele
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} — ${user.email} — ${user.address.city}`;
      userList.appendChild(li);
    });
  } catch (err) {
    loading.style.display = 'none';
    errorMsg.textContent = err.message;
  }
}

// Sayfa açılır açılmaz çağır
document.addEventListener('DOMContentLoaded', loadUsers);
