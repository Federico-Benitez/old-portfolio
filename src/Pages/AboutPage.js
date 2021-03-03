import React from "react";
import Title from "../Components/Title";
import ImageSection from "./ImageSection";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"Acerca de mi"} span={"Acerca de mi"} />
      <ImageSection />
    </div>
  );
}

export default AboutPage;
