let meyveler = ["elma", "armut", "üzüm", "mandalina"];

console.log("Tüm Meyveler:");
for (let i = 0; i < meyveler.length; i++) {
  console.log(meyveler[i]);
}

console.log("4 harften küçük meyveler:");
for (let i = 0; i < meyveler.length; i++) {
  if (meyveler[i].length < 5) {
    console.log(meyveler[i]);
  }
}