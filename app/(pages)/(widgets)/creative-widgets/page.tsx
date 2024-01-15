import Banner from "@/components/shared/Banner";
import CreativeWidgetsPage from "@/components/widgets/CreativeWidgetsPage";
import Link from "next/link";

const CreativeWidgets = () => {
  return (
    <div>
      <Banner
        title="Creative Widgets"
        links={
          <Link href="#" className="btn">
            Recent Tasks
          </Link>
        }
      />
      <CreativeWidgetsPage />
    </div>
  );
};

export default CreativeWidgets;
