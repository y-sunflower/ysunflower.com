"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import "../styles/testimonials.css";

type ImagePosition = "left" | "right";

type Testimonial = {
  name: string;
  job: string;
  img: string;
  link: string;
  texts: string[];
  imagePosition?: ImagePosition;
};

const testimonials: Testimonial[] = [
  {
    name: "Yan Holtz",
    job: "Software Engineer - Independent",
    img: "/testimonials/yan.png",
    link: "https://www.yan-holtz.com/",
    imagePosition: "left",
    texts: [
      '"Joseph consistently delivered outstanding work. He is a fast learner, highly productive, detail-oriented, and deeply curious. What impressed me most was his autonomy and proactive approach—he always took the initiative without needing guidance."',
    ],
  },
  {
    name: "Nicolas Rode",
    job: "Researcher - INRAE",
    img: "/testimonials/nicolas.jpg",
    link: "https://scholar.google.fr/citations?user=K8-EhrwAAAAJ&hl=fr",
    imagePosition: "right",
    texts: [
      '"Joseph did a wonderful job at turning our messy scripts into a clean R package. As a developer, he is very good at understanding what we want and coming up with innovative solutions."',
    ],
  },
  {
    name: "Thomas Salanova",
    job: "Researcher and Psychologist - Bordeaux Métropole",
    img: "/testimonials/thomas.png",
    link: "https://www.linkedin.com/in/thomas-salanova/",
    imagePosition: "left",
    texts: [
      '"As well as his technical skills, Joseph has excellent communication skills. His attitude and teaching skills make him a pleasure to work with."',
    ],
  },
  {
    name: "Federica Gazzelloni",
    job: "Actuary and Data Scientist - Organizer, Rome R Users Group",
    img: "/testimonials/federica.png",
    link: "https://federicagazzelloni.com/about.html",
    imagePosition: "right",
    texts: [
      '"Joseph delivered a highly engaging talk for the Rome R Users Group, introducing a design-first approach to data visualization that strongly resonated with our community. We highly recommend Joseph as a speaker for any data or analytics community interested in improving how they communicate data."',
    ],
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(showNext, 3000);
    return () => window.clearInterval(interval);
  }, [showNext]);

  const testimonial = testimonials[activeIndex];

  return (
    <div className="testimonials" aria-live="polite">
      <div
        className={`testimonial testimonial--image-${testimonial.imagePosition ?? "left"}`}
      >
        <a href={testimonial.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={testimonial.img}
            alt={testimonial.name}
            width={120}
            height={120}
            className="testimonial-img"
          />
        </a>
        <div className="testimonial-content">
          <a href={testimonial.link} target="_blank" rel="noopener noreferrer">
            <div className="testimonial-name">{testimonial.name}</div>
          </a>
          <div className="testimonial-job">{testimonial.job}</div>
          {testimonial.texts.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>

      <div className="testimonial-controls">
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous testimonial"
        >
          &#8592;
        </button>
        <span aria-hidden="true">
          {activeIndex + 1} / {testimonials.length}
        </span>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next testimonial"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
