import Image from "next/image";
import "../styles/testimonials.css";

const testimonials = [
  {
    name: "Yan Holtz",
    job: "Software Engineer - Independent",
    img: "/testimonials/yan.png",
    link: "https://www.yan-holtz.com/",
    texts: [
      '"Joseph consistently delivered outstanding work. He is a fast learner, highly productive, detail-oriented, and deeply curious. What impressed me most was his autonomy and proactive approach—he always took the initiative without needing guidance."',
    ],
  },
  {
    name: "Nicolas Rode",
    job: "Researcher - INRAE",
    img: "/testimonials/nicolas.jpg",
    link: "https://scholar.google.fr/citations?user=K8-EhrwAAAAJ&hl=fr",
    texts: [
      '"Joseph did a wonderful job at turning our messy scripts into a clean R package. As a developer, he is very good at understanding what we want and coming up with innovative solutions."',
    ],
  },
  {
    name: "Thomas Salanova",
    job: "Researcher and Psychologist - Bordeaux Métropole",
    img: "/testimonials/thomas.png",
    link: "https://www.linkedin.com/in/thomas-salanova/",
    texts: [
      '"As well as his technical skills, Joseph has excellent communication skills. His attitude and teaching skills make him a pleasure to work with."',
    ],
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials">
      {testimonials.map((t, idx) => (
        <div key={idx} className={"testimonial"}>
          <a href={t.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={t.img}
              alt={t.name}
              width={120}
              height={120}
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
