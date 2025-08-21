import Image from "next/image";
import "../styles/testimonials.css";

const testimonials = [
  {
    name: "Yan Holtz",
    job: "Software Engineer - Independent",
    img: "/testimonials/yan.png",
    link: "https://www.yan-holtz.com/",
    texts: [
      "I hired Joseph for a six-month internship, during which he contributed to several educational websites focused on programming and data visualization.",
      "Joseph consistently delivered outstanding work. He is a fast learner, highly productive, detail-oriented, and deeply curious. What impressed me most was his autonomy and proactive approach—he always took the initiative without needing guidance.",
      "Whatever role you need to fill, Joseph will exceed your expectations.",
    ],
  },
  {
    name: "Nicolas Rode",
    job: "Researcher - INRAE",
    img: "/testimonials/nicolas.jpg",
    link: "https://scholar.google.fr/citations?user=K8-EhrwAAAAJ&hl=fr",
    texts: [
      "Joseph did a wonderful job at turning our messy scripts into a clean R package. As a developer, he is very good at understanding what we want and coming up with innovative solutions.",
      "His proficiency in various programming languages (R, Python, Pascal) has clearly been an asset for the project. We highly recommend working with him.",
    ],
  },
  {
    name: "Thomas Salanova",
    job: "Researcher and Psychologist - Bordeaux Métropole",
    img: "/testimonials/thomas.png",
    link: "https://www.linkedin.com/in/thomas-salanova/",
    texts: [
      "As well as his technical skills, Joseph has excellent communication skills. His attitude and teaching skills make him a pleasure to work with. Even after his internship, I repeatedly asked for his help with questions related to coding, statistics or using GitHub.",
      "Each time, Joseph was able to respond responsive and relevant, providing clear and appropriate solutions. His explanations illustrate his ability to pass on his knowledge very effectively.",
    ],
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className={`testimonial ${idx % 2 === 0 ? "left" : "right"}`}
        >
          <a href={t.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={t.img}
              alt={t.name}
              width={100}
              height={100}
              className="testimonial-img"
            />
          </a>
          <div className="testimonial-content">
            <a href={t.link} target="_blank" rel="noopener noreferrer">
              <div className="testimonial-name">{t.name}</div>
            </a>
            <div className="testimonial-job">{t.job}</div>
            {t.texts.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
