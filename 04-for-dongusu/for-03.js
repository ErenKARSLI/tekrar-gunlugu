let ogrenciler = [
    { ad: "Ali", yas: 17 },
    { ad: "Ayşe", yas: 20 },
    { ad: "Mehmet", yas: 16 },
    { ad: "Zeynep", yas: 19 },
    { ad: "Veli", yas: 18 }
  ];
  
  ogrenciler.forEach((ogrenci) => {
    if (ogrenci.yas >= 18) {
      console.log(`${ogrenci.ad} sınava girebilir.`);
    } else {
      console.log(`${ogrenci.ad} sınava giremez.`);
    }
  });
  