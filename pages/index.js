import MainLayout from "../components/MainLayout/MainLayout";
import { wrapper } from "../store/store";
import useTranslation from "next-translate/useTranslation";
import About from "../containers/About/About";
import Why from "../containers/Why/Why";
import HowJoin from "../containers/HowJoin/HowJoin";
import Price from "../containers/Price/Price";
import TeachersContainer from "../containers/TeachersContainer/TeachersContainer";
import Reviews from "../containers/Reviews/Reviews";
import Feedback from "../containers/Feedback/Feedback";

export default function Home(props) {
  const { t } = useTranslation();

  return (
    <MainLayout title={"Home Page"}>
      <About />
      <Why />
      <HowJoin />
      <Price />
      <TeachersContainer />
      <Reviews />
      <Feedback />
    </MainLayout>
  );
}

export const GetServerSideProps = wrapper.getServerSideProps(() => async () => {
  console.log(store);
  return { props: {} };
});
