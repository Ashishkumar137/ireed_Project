"use client";

import "swiper/css";
import "swiper/css/navigation";
import Projects from "../projects/page";
import Banner from "../components/Banner";


export default function ProjectsPage() {

  return (
    <div>
        <Banner
        imageSrc="/assets/who_we_are.jpg"
        alt="who_we_are"
        heading="Our Projects"
        paragraph="Creating exceptional living spaces for the new India with innovation, robust engineering, and an unparalleled scale of delivery."
      />
      <Projects/>
      
    </div>
  );
}
