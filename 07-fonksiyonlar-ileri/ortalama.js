// Kullanıcıdan 3 not al
let not1 = Number(prompt("1. notu girin:"));
let not2 = Number(prompt("2. notu girin:"));
let not3 = Number(prompt("3. notu girin:"));

// Fonksiyon ile ortalamayı hesapla
function ortalamaHesapla(not1, not2, not3) {
  return (not1 + not2 + not3) / 3;
}

let ortalama = ortalamaHesapla(not1, not2, not3);
console.log("Ortalama:", ortalama);

// Geçti mi kaldı mı kontrolü
if (ortalama >= 50) {
  console.log("Tebrikler, geçtin! 🎉");
} else {
  console.log("Üzgünüm, kaldın. ❌");
}
