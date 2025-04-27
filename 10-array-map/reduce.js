let fiyatlar = [100, 200, 300, 400, 500];

let toplamFiyat = fiyatlar.reduce(function(toplam, fiyat) {
  return toplam + fiyat;
}, 0);

console.log(toplamFiyat); // 1500
//  reduce() ➔ Bir listeyi (array) tek bir sonuca indirger.
//  
//  Örneğin:
//  
//  Sayıları toplamak,
//  
//  Çarpmak,
//  
//  En büyük sayıyı bulmak,
//  
//  Tek bir string oluşturmak...
//  
//  Özetle:
//  Listeyi ➔ Tek bir sonuca çevirir!