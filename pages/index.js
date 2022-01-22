import MainLayout from "../components/MainLayout/MainLayout";
import { wrapper } from "../store/store";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["main"], nextI18NextConfig)),
    },
  };
}

export default function Home(props) {
  const { t } = useTranslation();
  return (
    <MainLayout title={"Home Page"}>
      <h1>Hello Next.JS!</h1>
      <h2>{t("common.description")}</h2>
    </MainLayout>
  );
}

export const GetServerSideProps = wrapper.getServerSideProps(() => async () => {
  console.log(store);
  return { props: {} };
});
