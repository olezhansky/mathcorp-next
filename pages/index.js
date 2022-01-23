import MainLayout from "../components/MainLayout/MainLayout";
import { wrapper } from "../store/store";
import useTranslation from "next-translate/useTranslation";
import About from "../containers/About/About";

export default function Home(props) {
  const { t } = useTranslation();

  return (
    <MainLayout title={"Home Page"}>
      <About />
    </MainLayout>
  );
}

export const GetServerSideProps = wrapper.getServerSideProps(() => async () => {
  console.log(store);
  return { props: {} };
});
