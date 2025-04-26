let kullanici1 = {
    ad : "Ali",
    soyad: "Yılmaz",
    yas: 22,
    email:"aliYılmaz@gmail.com"
}
let kullanici2 = {
    ad : "Ayşe",
    soyad: "Türk",
    yas: 22,
    email:"ayseTurk@gmail.com"
}
let kullanici3 = {
    ad : "Veli",
    soyad: "Yılmaz",
    yas: 22,
    email:"veliYılmaz@gmail.com"
}
let kullanicilar=[kullanici1,kullanici2,kullanici3]

//console.log("hoşgeldin", kullanici1.ad )
//console.log("Merhaba" ,kullanici3.soyad ,"Bey")

console.log(`Hoşgeldin ${kullanici1.ad}`);      //Daha temiz kods
console.log(`Merhaba ${kullanici3.soyad} Bey`); //Daha temiz kods

for (let i = 0; i < kullanicilar.length; i++) {                                             //Tüm kullanıcıların adlarını tek tek yazdırma
    console.log(`${i + 1}. Kullanıcı: ${kullanicilar[i].ad} ${kullanicilar[i].soyad}`);     //Tüm kullanıcıların adlarını tek tek yazdırma
  }