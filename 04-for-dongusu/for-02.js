let ogrenciler = [
    { ad: "Ali", yas: 17 },
    { ad: "Ayşe", yas: 20 },
    { ad: "Mehmet", yas: 16 },
    { ad: "Zeynep", yas: 19 },
    { ad: "Veli", yas: 18 }
  ];

//  for(i=0;i <ogrenciler.length; i++){
//    if(ogrenciler[i].yas >=18){
//        console.log(ogrenciler[i])
//    }
//  }
  for (let i = 0; i < ogrenciler.length; i++) {
    if (ogrenciler[i].yas >= 18) {
      console.log(`${ogrenciler[i].ad} sınava girebilir.`);
    } else {
      console.log(`${ogrenciler[i].ad} sınava giremez.`);
    }
  }