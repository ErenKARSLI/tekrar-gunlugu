// Değişken tanımlamaları
let isim = "Eren";
let yas = 24;
let ogrenciMi = true;

// Değişkenleri konsola yazdır
console.log(isim, yas, ogrenciMi);

let isim1 = "Eren Turgut";
let yas1 = 22;
let soyisim = "KARSLI" ;

console.log(isim1 + " " + soyisim + " " + yas1)

// TAMPLATE BİRLEŞTİRME [ $ ]

console.log(`Benim adım ${isim1} ve ${yas1} yaşındayım.`);


//Arry (Diziler)

let sehir = ["istanbul", "Trabzon", "Balıkesir"]

console.log(sehir[0])
console.log(sehir[2] + "Deyim")
console.log(sehir[2] , "Deyim")
console.log(sehir[2] , "Deyim" , sehir[0])

//Obje (Object)

let kisi ={
    ad : "Ali",
    yas : 21,
    sehir: "Trabzon",
    bulunduguYer: "balıkesir" 
}
console.log(kisi.bulunduguYer)  //objeleri bu şekil çağırabiliriz
console.log(kisi["yas"])        //objeleri bu şekil çağırabiliriz