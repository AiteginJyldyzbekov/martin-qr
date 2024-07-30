import MainBanner from "../../../components/MainBanner/MainBanner";
import CallBackForm from "../../../components/CallBackForm/CallBackForm";
import BackBtn from "../../../components/backBtn/BackBtn";
import useHook from "shared/hooks/useHook";
import { useEffect } from "react";
import Osnov from "../../../components/osnov/Osnov";
import AboutBlock from "../../../components/AboutBlock/AboutBlock";

const AboutUs = () => {

    const { getItems: getAds, items: ads, isLoading } = useHook("ad")

    useEffect(() => {
        getAds();
    }, []);
  return (
    <>
      <MainBanner ads={ads} idLoading={isLoading} />
      <AboutBlock />
      <Osnov />
      <CallBackForm />
      <BackBtn />
    </>
  );
};

export default AboutUs;
