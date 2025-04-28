// search.js

const searchInput = document.getElementById('searchInput');
const userListEl  = document.getElementById('userList');

searchInput.addEventListener('input', () => {
  const term = searchInput.value.trim().toLowerCase();
  Array.from(userListEl.children).forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(term) ? '' : 'none';
  });
});
