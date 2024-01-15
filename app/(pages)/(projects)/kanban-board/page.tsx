import TaskBoard from "@/components/projects/Board";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const KanbanBoardPage = () => {
  return (
    <>
      <Banner
        title="Kanban Board"
        links={
          <Link href="#" className="btn">
            Create New Board
          </Link>
        }
      />
      <TaskBoard />
    </>
  );
};

export default KanbanBoardPage;
