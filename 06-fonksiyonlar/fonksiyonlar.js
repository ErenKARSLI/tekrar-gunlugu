selamVer(); // Merhaba!

function selamVer(isim) {
    console.log(`Merhaba` ,isim);
    //console.log(`Merhaba ${isim}!`); üstekiyle aynı
  }
  
  selamVer("Eren"); // Merhaba Eren!
  selamVer("Ayşe"); // Merhaba Ayşe!
  

  function sinavDurumu(yas, ad) {
    if (yas >= 18) {
      console.log(`${ad} sınava girebilir.`);
    } else {
      console.log(`${ad} sınava giremez.`);
    }
  }
  
  sinavDurumu(20, "Ali");   // Ali sınava girebilir.
  sinavDurumu(16, "Mehmet"); // Mehmet sınava giremez.