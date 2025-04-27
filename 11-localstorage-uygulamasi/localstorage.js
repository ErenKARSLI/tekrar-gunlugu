let isimInput = document.getElementById("isimInput");
let kaydetButonu = document.getElementById("kaydetButonu");
let baslik = document.getElementById("baslik");

// Sayfa açılınca kaydedilmiş isim var mı kontrol et
let kayitliIsim = localStorage.getItem("kullaniciIsmi");
if (kayitliIsim) {
  baslik.innerText = `Hoşgeldin ${kayitliIsim}`;
}

// Butona tıklayınca isim kaydet
kaydetButonu.addEventListener("click", function() {
  let isim = isimInput.value.trim();
  if (isim.length > 0) {
    localStorage.setItem("kullaniciIsmi", isim);
    baslik.innerText = `Hoşgeldin ${isim}`;
    isimInput.value = "";
  } else {
    alert("Lütfen boş bırakmayın!");
  }
});
