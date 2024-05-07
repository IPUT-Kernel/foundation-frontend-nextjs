import FaQs from "@/components/home/Faqs";
import Footer from "@/components/home/Footer";
import ForDev from "@/components/home/ForDev";
import Hero from "@/components/home/Hero";
import MultipleLayout from "@/components/home/MultipleLayout";
import SmartUi from "@/components/home/SmartUi";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <SmartUi />

      {/*
      project紹介用に使えるかも
      <PrebuiltPages sliceNum={12} /> 
      */}

      <ForDev />
      <MultipleLayout />
      <FaQs />
      <Footer />
    </main>
  );
};

export default HomePage;
