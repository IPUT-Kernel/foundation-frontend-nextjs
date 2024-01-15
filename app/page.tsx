import AppSetup from "@/components/home/AppSetup";
import DevFriendly from "@/components/home/DevFriendly";
import FaQs from "@/components/home/Faqs";
import Footer from "@/components/home/Footer";
import ForDev from "@/components/home/ForDev";
import HardRock from "@/components/home/HardRock";
import Hero from "@/components/home/Hero";
import MultipleLayout from "@/components/home/MultipleLayout";
import PrebuiltPages from "@/components/home/PrebuiltPages";
import ReadyToDive from "@/components/home/ReadyToDive";
import Satisfaction from "@/components/home/Satisfaction";
import SmartUi from "@/components/home/SmartUi";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <AppSetup />
      <SmartUi />
      <PrebuiltPages sliceNum={12} />
      <ForDev />
      <MultipleLayout />
      <DevFriendly />
      <Satisfaction />
      <ReadyToDive />
      <HardRock />
      <FaQs />
      <Footer />
    </main>
  );
};

export default HomePage;
