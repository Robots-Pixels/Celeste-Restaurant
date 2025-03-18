import React from "react";
import Hero from "../components/Hero.jsx";
import Story from "../components/Story.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faSeedling, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import Signature from "../components/Signature.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CoreFeatures from "../components/CoreFeatures.jsx";


export default function About() {

  return (
    <div className="flex flex-col">
      <Hero />
      <Story />

      <CoreFeatures/>

      <Signature/>

      <Testimonials/>

    </div>
  );
}
