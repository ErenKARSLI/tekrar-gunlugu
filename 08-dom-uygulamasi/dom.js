// Elemanları Seçelim
let baslik = document.getElementById("baslik");
let paragraf = document.querySelector(".paragraf");
let inputAlani = document.getElementById("inputAlani");
let degistirButonu = document.getElementById("degistirButonu");
let liste = document.getElementById("liste");
let listeyeEkleButonu = document.getElementById("listeyeEkle");

// Açılışta Başlığı ve Paragrafı Değiştir
baslik.innerText = "Hoşgeldin DOM Dünyası!";
paragraf.style.color = "blue";

// Butona Tıklayınca Başlığı Değiştir
degistirButonu.addEventListener("click", function() {
  baslik.innerText = "Butona Tıkladın!";
});

// Inputa Yazınca Paragrafı Değiştir
inputAlani.addEventListener("input", function() {
  paragraf.innerText = inputAlani.value;
});

// Listeye Yeni Eleman Ekle
listeyeEkleButonu.addEventListener("click", function() {
  let yeniMadde = document.createElement("li"); // Yeni li oluştur
  yeniMadde.innerText = inputAlani.value;       // Inputtan aldığı yazıyı koy
  liste.appendChild(yeniMadde);                  // Listeye ekle
});
