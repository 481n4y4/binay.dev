import hivo from "../assets/img/Hivo.png";
import mindkeeper from "../assets/img/MindKeeper.png";

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
    id: "mindkeeper",
    title: "MindKeeper",
    image: mindkeeper,
    description: `
MindKeeper adalah solusi IoT untuk memantau distraksi digital dan membantu produktivitas.
    `,
    feature: `Fitur:
- Monitoring real-time.
- Dukungan pengingat otomatis.
- Cocok untuk manajemen waktu belajar/kerja.`,
    repo: "https://github.com/481n4y4/MindKeeper.git",
  },
];

export default projects;
