import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import useTranslation from "next-translate/useTranslation";
import Teachers from "../components/Teachers/Teachers";

const TeachersPage = () => {
  const { t } = useTranslation();
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
      <div className="container">
        <div style={{ paddingTop: "120px" }}>
          <Teachers title={t("teachers:teachers.title")} />
        </div>
      </div>
    </MainLayout>
  );
};

export default TeachersPage;
