import hivo from "../assets/img/Hivo.png";
import mindkeeper from "../assets/img/MindKeeper.png";

const projects = [
  {
    id: "hivo",
    title: "Hidden Voice",
    image: hivo,
    description:
      "AI-based web application designed to assist communication for people with speech impairments.",
    detail: `
      ## Hidden Voice

      Hidden Voice (HiVo) adalah aplikasi web inovatif berbasis AI untuk membantu komunikasi penyandang tunawicara.  
      - Menggunakan kamera + object detection.  
      - Menerjemahkan gerakan tangan ke teks.  
      - Mendukung text-to-speech untuk interaksi lebih lancar.  
    `,
  },
  {
    id: "mindkeeper",
    title: "MindKeeper",
    image: mindkeeper,
    description:
      "IoT solution that helps reduce digital distractions and supports productivity through real-time monitoring.",
    detail: `
      ## MindKeeper

      MindKeeper adalah solusi IoT untuk memantau penggunaan perangkat digital agar lebih produktif.  
      - Monitoring real-time.  
      - Dukungan pengingat otomatis.  
      - Cocok untuk manajemen waktu belajar / kerja.  
    `,
  },
];

export default projects;
