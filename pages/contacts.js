import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import ContactsContainer from "../containers/ContactsContainer/ContactsContainer";

const Contacts = () => {
  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    scrollToTopHandler();
  }, []);

  return (
    <MainLayout>
      <ContactsContainer />
    </MainLayout>
  );
};

export default Contacts;
