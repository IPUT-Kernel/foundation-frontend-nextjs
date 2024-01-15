import Banner from "@/components/shared/Banner";
import ListWidgetContent from "@/components/widgets/ListWidgetContent";
import Link from "next/link";

const ListWidgets = () => {
  return (
    <div>
      <Banner
        title="List Widgets"
        links={
          <Link href="#" className="btn">
            Add Widget
          </Link>
        }
      />
      <ListWidgetContent />
    </div>
  );
};

export default ListWidgets;
