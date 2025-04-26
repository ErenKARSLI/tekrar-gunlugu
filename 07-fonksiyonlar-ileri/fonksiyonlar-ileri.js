function ikiIleCarp(sayi) {
    return sayi * 2;
  }
  
  let sonuc = ikiIleCarp(5);
  console.log(sonuc); // 10
  
  function toplama(a, b) {
    return a + b;
  }
  
  console.log(toplama(3, 7)); // 10
  
  function selamVer(isim = "Misafir") {
    console.log(`Merhaba ${isim}`);
  }
  
  selamVer("Eren"); // Merhaba Eren
  selamVer();       // Merhaba Misafir
  
  const gunaydinDe = () => {
    console.log("Günaydın!");
  };
  
  gunaydinDe(); // Günaydın!