// Elemanları seç
const form       = document.getElementById("kullaniciFormu");
const isimInput  = document.getElementById("isim");
const emailInput = document.getElementById("email");
const sifreInput = document.getElementById("sifre");

const isimError  = document.getElementById("isimError");
const emailError = document.getElementById("emailError");
const sifreError = document.getElementById("sifreError");
const formSuccess= document.getElementById("formSuccess");

// E-posta validasyonu için regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Submit olayını dinle
form.addEventListener("submit", function(e) {
  e.preventDefault();
  let valid = true;

  // Hata mesajlarını temizle
  isimError.textContent = "";
  emailError.textContent = "";
  sifreError.textContent = "";
  formSuccess.textContent = "";

  // 1. İsim kontrolü
  const isim = isimInput.value.trim();
  if (isim.length < 3) {
    isimError.textContent = "İsim en az 3 karakter olmalı.";
    valid = false;
  }

  // 2. E-posta kontrolü
  const email = emailInput.value.trim();
  if (!emailRegex.test(email)) {
    emailError.textContent = "Geçerli bir e-posta girin.";
    valid = false;
  }

  // 3. Şifre kontrolü
  const sifre = sifreInput.value;
  if (sifre.length < 6) {
    sifreError.textContent = "Şifre en az 6 karakter olmalı.";
    valid = false;
  }

  // Eğer hepsi geçerliyse
  if (valid) {
    formSuccess.textContent = "Tebrikler! Form başarıyla gönderildi.";
    // Burada localStorage.setItem veya fetch ile server'a gönderim yapılabilir
    form.reset();
  }
});
