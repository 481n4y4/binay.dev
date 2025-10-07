import hivo from "../assets/img/Hivo.png";
import mindkeeper from "../assets/img/MindKeeper.png";
import karbonis from "../assets/img/Karbonis.png";
import cineview from "../assets/img/cineview.png";

const projects = [
  {
    id: "hivo",
    title: "Hidden Voice",
    image: hivo,
    description: `
Hidden Voice (HiVo) is an innovative AI-based web application designed to support communication for people with speech impairments.
    `,
    feature: `Features:
- Uses camera + object detection.
- Translates hand gestures into text.
- Supports text-to-speech for smoother interaction.`,
    repo: "https://github.com/xyleneSVG/HiVo.git",
  },
  {
    id: "mindkeeper",
    title: "MindKeeper",
    image: mindkeeper,
    description: `
MindKeeper is an IoT-based solution to monitor digital distractions and improve productivity.
    `,
    feature: `Features:
- Real-time monitoring.
- Automated reminder support.
- Suitable for time management in study/work.`,
    repo: "https://github.com/481n4y4/MindKeeper.git",
  },
  {
    id: "karbonis",
    title: "Karbonis",
    image: karbonis,
    description: `
Karbonis is a web application to calculate estimated greenhouse gas emissions from daily activities such as transportation, household energy, and food consumption.`,
    feature: `
    - Calculates carbon emissions from:
Transportation (car, motorcycle, train, bus)
Household energy (electricity, gas)
Food (red meat, chicken, rice, vegetables)
- Displays total monthly emissions in kg CO₂e
- Simple and educational interface
- 100% web-based, no login or installation required`,
    repo: "https://github.com/481n4y4/karbonis",
  },
  {
    id:"cineview",
    title:"Cineview",
    image: cineview, 
    description: "Cineview is a web app that lets users explore movies, give ratings, and share reviews",
    feature: `
    - Search movies by title/genre
    - View movie details (poster, synopsis, rating, cast)
    - Popular/trending movies list
    - Filter by genre/year
    `,
    repo: "https://github.com/rakhaafd/cineview.git"
  }
];

export default projects;
