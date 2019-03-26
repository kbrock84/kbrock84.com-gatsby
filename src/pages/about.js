import React from "react";
import { PageContextProvider } from "../PageContext/PageContext";
import AboutMe from "../components/About/AboutMe";
const About = () => {
  return (
    <PageContextProvider>
      <AboutMe />
    </PageContextProvider>
  );
};

export default About;
