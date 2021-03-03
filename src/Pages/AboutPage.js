import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillSection from "../Components/SkillSection";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"Acerca de mi"} span={"Acerca de mi"} />
      <ImageSection />
      <Title title={"Skills"} span={"Skills"} />
      <div className="all-skills-container">
        <SkillSection skill={"JavaScript"} progress={"70%"} width={"70%"} />
        <SkillSection skill={"HTML"} progress={"80%"} width={"80%"} />
        <SkillSection skill={"CSS"} progress={"50%"} width={"50%"} />
        <SkillSection skill={"React"} progress={"40%"} width={"40%"} />
        <SkillSection skill={"GraphQL"} progress={"35%"} width={"35%"} />
        <SkillSection skill={"NodeJS"} progress={"60%"} width={"60%"} />
        <SkillSection skill={"MySQL"} progress={"75%"} width={"75%"} />
        <SkillSection skill={"MongoDB"} progress={"60%"} width={"60%"} />
      </div>
    </div>
  );
}

export default AboutPage;
