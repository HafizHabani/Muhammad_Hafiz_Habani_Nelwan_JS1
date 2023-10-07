// If Else
let nilai = 75;
let hasilakhir = "";
if (nilai >= 80) {
  console.log("Selamat! Anda lulus dengan nilai A");
  hasilakhir = "Selamat! Anda lulus dengan nilai A <br>";
} else if (nilai >= 70) {
  console.log("Anda lulus dengan nilai B");
  hasilakhir = "Anda lulus dengan nilai B <br>";
} else {
  console.log("Mohon maaf, anda bisa mengikuti ujian lain waktu");
  hasilakhir = "Mohon maaf, anda bisa mengikuti ujian lain waktu <br>";
}
document.write(hasilakhir);


// Switch Case
let hari = "Senin";
let keteranganhari = "";
switch (hari) {
  case "Senin":
    console.log("Hari ini ada perkuliahan di Infinite Learning");
    keteranganhari = "Hari ini ada perkuliahan di Infinite Learning <br>";
    break;
  case "Jumat":
    console.log("Hari ini ada perkuliahan gabungan di Infinite Learning");
    keteranganhari = "Hari ini ada perkuliahan gabungan di Infinite Learning <br>";
    break;
  case "Minggu":
    console.log("Hari ini tidak ada perkuliahan di Infinite Learning");
    keteranganhari = "Hari ini tidak ada perkuliahan di Infinite Learning <br>";
    break;
  default:
    console.log("Hari ini ada perkuliahan asynchronous di Infinite Learning");
    keteranganhari = "Hari ini ada perkuliahan asynchronous di Infinite Learning <br>";
}
document.write(keteranganhari);


// For Statement
for (let i = 1; i <= 5; i++) {
    console.log("Ini hari ke " + i + " berkuliah di Infinite Learning");
    document.write("Ini hari ke " + i + " berkuliah di Infinite Learning" +"<br>");
  }
  
// While
let angka = 1;
let hasil = "";
while (angka <= 5) {
  console.log("Mentor di Infinite Learning ada " + angka);
  hasil += "Mentor di Infinite Learning ada " + angka + "<br>";
  angka++;
}
document.write(hasil);

// Do While
let x = 1;
let y = "";
do {
  console.log("Nilai x: " + x);
  y += "Materi Design Thinking ke " + x + "<br>";
  x++;
} while (x <= 5);
document.write(y);

// Function
function kalix(a, b) {
    return a * b;
  }

let kali = kalix(5, 3);
document.write("Hasil pemanggilan fungsi kali : " + kali);
console.log("Hasil pemanggilan fungsi kali : " + kali);