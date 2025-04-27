let fiyatlar = [100, 200, 300, 400, 500];

let zamliFiyatlar = fiyatlar.map(function(fiyat) {
  return fiyat * 1.10;
});

console.log(zamliFiyatlar); // 110 , 220 , 330 , 440 , 550 



//  map() ➔ Bir liste (array) üzerinde döner ve her elemanı değiştirir,
//  sonuçta yeni bir liste oluşturur.
//  
//  Özetle:
//  Eski liste ➔ Değiştirilmiş yeni liste üretir.