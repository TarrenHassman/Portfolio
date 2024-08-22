"use client"
import React from "react";
import Background from "../components/background/Background";
import HomeButton from "../components/navigation/HomeButton";
import Particles from "../components/3components/Particles";
import AboutDetails from "./AboutDetails";
export default function About() {
  return (
    <div className="w-full ">
      <Background></Background>
      <Particles></Particles>
      <div>
        <HomeButton></HomeButton>
      </div>
      <AboutDetails></AboutDetails>
      <Particles></Particles>
    </div>
  );
}
