let kisi1 ={
    ad:"Mehmet",
    yas: 20
}
let kisi2={
    ad:"Ali",
    yas : 17
}
let kullanicilar = [kisi1, kisi2];

for (let i = 0; i < kullanicilar.length; i++) {
  if (kullanicilar[i].yas >= 18) {
    console.log(`${kullanicilar[i].ad} Bey, ${kullanicilar[i].yas} yaşında olduğu için sınava girebilir.`);
  } else {
    console.log(`${kullanicilar[i].ad} Bey, sınava giremez.`);
  }
}
//if (kisi1.yas >= 18) {
//    console.log(`${kisi1.ad} Bey, ${kisi1.yas} yaşında olduğu için sınava girebilir.`);
//  } else {
//    console.log(`${kisi1.ad} Bey, sınava giremez.`);
//  }
//  
//  if (kisi2.yas >= 18) {
//    console.log(`${kisi2.ad} Bey, ${kisi2.yas} yaşında olduğu için sınava girebilir.`);
//  } else {
//    console.log(`${kisi2.ad} Bey, sınava giremez.`);
//  }