import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout/MainLayout";

const TeachersPage = () => {
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
      <div className="container">5</div>
    </MainLayout>
  );
};

export default TeachersPage;
