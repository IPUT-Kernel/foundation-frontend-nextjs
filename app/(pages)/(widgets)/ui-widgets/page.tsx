import Banner from "@/components/shared/Banner";
import UiWidgets from "@/components/widgets/UiWidgets";
import Link from "next/link";

const UIWidgets = () => {
  return (
    <div>
      <Banner
        title="UI Widgets"
        links={
          <Link href="#" className="btn">
            Upgrade Now
          </Link>
        }
      />
      <UiWidgets />
    </div>
  );
};

export default UIWidgets;
