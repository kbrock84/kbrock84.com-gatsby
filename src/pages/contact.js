import React from "react";
import { PageContextProvider } from "../PageContext/PageContext";
import ContactMe from "../components/Contact/ContactMe";

const Contact = () => {
  return (
    <PageContextProvider>
      <ContactMe />
    </PageContextProvider>
  );
};

export default Contact;
