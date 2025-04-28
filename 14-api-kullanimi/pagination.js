// pagination.js

const userListEl = document.getElementById('userList');
let currentPage  = 1;
const perPage    = 5;

function renderPage(page) {
  currentPage = page;
  userListEl.innerHTML = '';
  const start = (page - 1) * perPage;
  window.usersGlobal
    .slice(start, start + perPage)
    .forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} — ${user.email} — ${user.address.city}`;
      li.dataset.user = JSON.stringify(user);
      userListEl.appendChild(li);
    });
  renderPagination();
}

function renderPagination() {
  document.querySelector('.pagination')?.remove();
  const nav = document.createElement('div');
  nav.className = 'pagination';
  const totalPages = Math.ceil(window.usersGlobal.length / perPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
    btn.textContent = i;
    btn.addEventListener('click', () => renderPage(i));
    nav.appendChild(btn);
  }
  userListEl.after(nav);
}
