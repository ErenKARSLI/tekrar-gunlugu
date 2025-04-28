// details.js

const userListEl  = document.getElementById('userList');
const userModal   = document.getElementById('userModal');
const modalClose  = document.getElementById('modalClose');
const modalName   = document.getElementById('modalName');
const modalEmail  = document.getElementById('modalEmail');
const modalPhone  = document.getElementById('modalPhone');
const modalCity   = document.getElementById('modalCity');
const modalCompany= document.getElementById('modalCompany');

// Listeye tıklayınca detay modal aç
userListEl.addEventListener('click', e => {
  const li = e.target.closest('li');
  if (!li || !li.dataset.user) return;
  const user = JSON.parse(li.dataset.user);
  modalName.textContent    = user.name;
  modalEmail.textContent   = user.email;
  modalPhone.textContent   = user.phone;
  modalCity.textContent    = user.address.city;
  modalCompany.textContent = user.company.name;
  userModal.style.display  = 'flex';
});

// Kapat butonu
modalClose.addEventListener('click', () => {
  userModal.style.display = 'none';
});
