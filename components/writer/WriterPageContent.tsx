import Articles from "./Articles";
import Hero from "./Hero";
import LatestComments from "./LatestComments";
import PopularAuthors from "./PopularAuthors";
import Stats from "./Stats";

const WriterPageContent = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div className="col-span-12 xl:col-span-8">
        <Hero />
        <Stats />
        <PopularAuthors />
        <LatestComments />
      </div>
      <div className="col-span-12 xl:col-span-4">
        <Articles />
      </div>
    </div>
  );
};

export default WriterPageContent;
