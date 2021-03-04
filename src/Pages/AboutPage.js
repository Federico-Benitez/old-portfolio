import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillSection from "../Components/SkillSection";
import ServicesSection from "../Components/ServicesSection";
import webDevelop from "../img/webDevelop.svg";
import testing from "../img/testing.svg";
import deploy from "../img/deploy.svg";
import api from "../img/api.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"Acerca de mi"} span={"Acerca de mi"} />
      <ImageSection />
      <Title title={"Skills"} span={"Skills"} />
      <div className="services-container">
        <ServicesSection
          image={webDevelop}
          title={"Desarrollo de Páginas Web Responsive"}
          text={
            "Páginas web adaptadas para cualquier dispositivo, grande o pequeño."
          }
        />
        <ServicesSection
          image={api}
          title={"Desarrollo Rest APIs"}
          text={"Aplicaciónes web para servir a distintos servicios web."}
        />
        <ServicesSection
          image={testing}
          title={"Testing"}
          text={
            "Testeo y Debugging de Apps Web para evitar fallos y vulnerabilidades."
          }
        />
        <ServicesSection
          image={deploy}
          title={"Deploy de Apps y APIs"}
          text={
            "Deploy de Apps y APIs para ser accedidas desde cualquier lugar."
          }
        />
      </div>
      <Title title={"Conocimientos"} span={"Conocimientos"} />
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
