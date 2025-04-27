//  filter() ➔ Bir liste üzerinde döner ve belirli bir şarta uyan elemanları seçer.
//  Yeni bir liste oluşturur.
//  
//  Özetle:
//  Eski liste ➔ Şarta uyanlardan oluşan yeni liste üretir.
let fiyatlar = [100, 200, 300, 400, 500];

let zamliFiyatlar = fiyatlar.map(function(fiyat) {
  return fiyat * 1.10;
});

console.log(zamliFiyatlar); // 110 , 220 , 330 , 440 , 550 

let yuksekFiyatlar = fiyatlar.filter(function(fiyat) {
    return fiyat > 300;
  });
  
  console.log(yuksekFiyatlar);
  