import React, { useEffect } from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import useTranslation from "next-translate/useTranslation";

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
      <div className="container">{t("teachers:title")}</div>
    </MainLayout>
  );
};

export default TeachersPage;
