import MainLayout from "../components/MainLayout/MainLayout";
import { wrapper } from "../store/store";
import useTranslation from "next-translate/useTranslation";
import About from "../containers/About/About";
import Why from "../containers/Why/Why";
import HowJoin from "../containers/HowJoin/HowJoin";
import Price from "../containers/Price/Price";
import TeachersContainer from "../containers/TeachersContainer/TeachersContainer";

export default function Home(props) {
  const { t } = useTranslation();

  return (
    <MainLayout title={"Home Page"}>
      <About />
      <Why />
      <HowJoin />
      <Price />
      <TeachersContainer />
    </MainLayout>
  );
}

export const GetServerSideProps = wrapper.getServerSideProps(() => async () => {
  console.log(store);
  return { props: {} };
});
