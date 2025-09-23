import hivo from "../assets/img/Hivo.png";
import mindkeeper from "../assets/img/MindKeeper.png";
import karbonis from "../assets/img/Karbonis.png";

const projects = [
  {
    id: "hivo",
    title: "Hidden Voice",
    image: hivo,
    description: `
Hidden Voice (HiVo) adalah aplikasi web inovatif berbasis AI untuk membantu komunikasi penyandang tunawicara.
    `,
    feature: `Fitur:
- Menggunakan kamera + object detection.
- Menerjemahkan gerakan tangan ke teks.
- Mendukung text-to-speech untuk interaksi lebih lancar.`,
    repo: "https://github.com/xyleneSVG/HiVo.git",
  },
  {
    id: "karbonis",
    title: "Karbonis",
    image: karbonis,
    description: `
Karbonis adalah sebuah aplikasi berbasis web yang membantu pengguna menghitung estimasi emisi gas rumah kaca (GRK) yang dihasilkan dari aktivitas sehari-hari seperti transportasi, penggunaan energi rumah tangga, dan pola konsumsi makanan.    `,
    feature: `
    - Menghitung emisi karbon dari:
Transportasi (mobil, motor, kereta, bus)
Energi rumah tangga (listrik, gas)
Makanan (daging merah, ayam, nasi, sayuran)
- Menampilkan total emisi bulanan dalam satuan kg CO₂e
- Antarmuka sederhana dan edukatif
- 100% berbasis web, tanpa login atau instalasi`,
    repo: "https://github.com/481n4y4/karbonis",
  },
];

export default projects;
