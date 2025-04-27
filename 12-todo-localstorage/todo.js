// Elemanları seç
const gorevInput    = document.getElementById("gorevInput");
const ekleButonu    = document.getElementById("ekleButonu");
const temizleButonu = document.getElementById("temizleButonu");
const gorevListesi  = document.getElementById("gorevListesi");
const themeToggle   = document.getElementById("themeToggle");

// Tema tercihini yükle
const savedTheme = localStorage.getItem("tema") || "light";
if (savedTheme === "dark") document.body.classList.add("dark-mode");

// Tema değiştir
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const tema = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("tema", tema);
});

// LocalStorage'dan görevleri al (yoksa boş dizi)
let gorevler = JSON.parse(localStorage.getItem("gorevler")) || [];

// Görevleri ekranda gösteren fonksiyon
function gorevleriGoster() {
  // Listeyi temizle
  gorevListesi.innerHTML = "";

  gorevler.forEach((gorevObj, index) => {
    const li = document.createElement("li");
    li.innerText = gorevObj.text;
    li.classList.toggle("tamamlandi", gorevObj.done);
    li.classList.add("fade-in"); // ekleme animasyonu

    // Tamamlandı işareti
    li.addEventListener("click", () => {
      gorevObj.done = !gorevObj.done;
      kaydetveGoster();
    });

    // Sil butonu
    const silButonu = document.createElement("button");
    silButonu.innerText = "Sil";
    silButonu.addEventListener("click", e => {
      e.stopPropagation();
      // fade-out animasyonu sonra sil
      li.classList.add("fade-out");
      li.addEventListener("animationend", () => {
        gorevSil(index);
      });
    });

    li.appendChild(silButonu);
    gorevListesi.appendChild(li);
  });
}

// Depoyu güncelle ve göster
function kaydetveGoster() {
  localStorage.setItem("gorevler", JSON.stringify(gorevler));
  gorevleriGoster();
}

// Belirli bir index'teki görevi silen fonksiyon
function gorevSil(index) {
  gorevler.splice(index, 1);
  kaydetveGoster();
}

// Ekle butonuna tıklanınca yeni görev ekle
ekleButonu.addEventListener("click", () => {
  const text = gorevInput.value.trim();
  if (text.length > 0) {
    gorevler.push({ text, done: false });
    kaydetveGoster();
    gorevInput.value = "";
  } else {
    alert("Lütfen bir görev girin!");
  }
});

// Tümünü Temizle butonuna tıklanınca
temizleButonu.addEventListener("click", () => {
  if (confirm("Tüm görevleri silmek istediğine emin misin?")) {
    gorevler = [];
    kaydetveGoster();
  }
});

// Sayfa yüklendiğinde mevcut görevleri ekrana bas
window.addEventListener("load", gorevleriGoster);
