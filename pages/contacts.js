import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout/MainLayout";

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
      <div style={{ paddingTop: "100px" }}>Contacts</div>
    </MainLayout>
  );
};

export default Contacts;
