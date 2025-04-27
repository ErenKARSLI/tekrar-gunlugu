let gorevInput = document.getElementById("gorevInput");
let ekleButonu = document.getElementById("ekleButonu");
let gorevListesi = document.getElementById("gorevListesi");

// Sayfa açıldığında localStorage'dan görevleri yükle
let gorevler = JSON.parse(localStorage.getItem("gorevler")) || [];

gorevleriGoster();

// Görev ekleme
ekleButonu.addEventListener("click", function() {
  let yeniGorev = gorevInput.value.trim();
  if (yeniGorev.length > 0) {
    gorevler.push(yeniGorev);
    localStorage.setItem("gorevler", JSON.stringify(gorevler));
    gorevleriGoster();
    gorevInput.value = "";
  } else {
    alert("Lütfen bir görev girin!");
  }
});

// Görevleri ekranda gösterme
function gorevleriGoster() {
  gorevListesi.innerHTML = "";
  gorevler.forEach(function(gorev, index) {
    let li = document.createElement("li");
    li.innerText = gorev;

    // Silme Butonu
    let silButonu = document.createElement("button");
    silButonu.innerText = "Sil";
    silButonu.addEventListener("click", function() {
      gorevSil(index);
    });

    li.appendChild(silButonu);
    gorevListesi.appendChild(li);
  });
}

// Görev silme
function gorevSil(index) {
  gorevler.splice(index, 1);
  localStorage.setItem("gorevler", JSON.stringify(gorevler));
  gorevleriGoster();
}
