// Değişkenler
const isimInput = document.getElementById("isim");
const yasInput = document.getElementById("yas");
const kaydolButonu = document.getElementById("kaydol");
const kullaniciListesi = document.getElementById("kullaniciListesi");

let kullanicilar = []; // Kullanıcıları tutacak liste

// Fonksiyon: Kullanıcı ekle
function kullaniciEkle(isim, yas) {
  let yeniKullanici = {
    ad: isim,
    yas: yas
  };
  kullanicilar.push(yeniKullanici);
}

// Fonksiyon: Listeyi Güncelle
function listeyiGuncelle() {
  kullaniciListesi.innerHTML = ""; // Önce listeyi temizle
  kullanicilar.forEach(function(kullanici) {
    let li = document.createElement("li");
    li.innerText = `${kullanici.ad} (${kullanici.yas} yaşında)`;
    kullaniciListesi.appendChild(li);
  });
}

// Fonksiyon: İsim sadece harf mi kontrolü
function isimGecerliMi(isim) {
  const harfRegex = /^[A-Za-zğüşöçıİĞÜŞÖÇ\s]+$/; // Türkçe karakterler dahil sadece harf ve boşluk
  return harfRegex.test(isim);
}

// Event: Butona tıklanınca çalışacak
kaydolButonu.addEventListener("click", function() {
  let isim = isimInput.value.trim();
  let yas = Number(yasInput.value);

  // İsim ve yaş boş mu?
  if (isim === "" || isNaN(yas)) {
    alert("Lütfen geçerli bir isim ve yaş girin!");
    return;
  }

  // İsim uzunluk kontrolü
  if (isim.length < 3) {
    alert("İsim en az 3 karakter olmalı!");
    return;
  }

  // İsim sadece harf mi kontrolü
  if (!isimGecerliMi(isim)) {
    alert("İsim sadece harflerden oluşmalıdır!");
    return;
  }

  // Yaş 0'dan küçük veya 150'den büyük mü?
  if (yas <= 0 || yas > 150) {
    alert("Yaş 0'dan büyük ve 150'den küçük olmalıdır!");
    return;
  }

  // Geçme/Kalma mesajı
  if (yas < 18) {
    alert(`${isim} kaydedildi ancak 18 yaşından küçük!`);
  } else {
    alert(`${isim} başarıyla kaydedildi!`);
  }

  kullaniciEkle(isim, yas);
  listeyiGuncelle();

  // Inputları temizle
  isimInput.value = "";
  yasInput.value = "";
});
