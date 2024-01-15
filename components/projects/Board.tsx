"use client";
import { IconCirclePlus } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import OptionsVertical from "../shared/OptionsVertical";
import { StrictModeDroppable } from "./StaticModeDroppable";

type Task = {
  id: number;
  title: string;
  priority: "High" | "Medium" | "Low";
  date: string;
  name: string;
  designation: string;
  img: string;
};

type TaskList = Task[];

type Tasks = {
  "In Progress": TaskList;
  "In Review": TaskList;
  Done: TaskList;
};
const list: Tasks = {
  "In Progress": [
    {
      id: 1,
      title: "Tasks 1",
      priority: "High",
      date: "Jan 23, 2023 / 04:05 PM",
      name: "Cody Fisher",
      designation: "Software developer",
      img: "/images/user-big-1.png",
    },
    {
      id: 2,
      title: "Tasks 2",
      priority: "Medium",
      date: "Jan 23, 2023 / 04:05 PM",
      name: "Cody Fisher",
      designation: "Software developer",
      img: "/images/user-big-2.png",
    },
    {
      id: 3,
      title: "Tasks 3",
      priority: "Low",
      date: "Jan 23, 2023 / 04:05 PM",
      name: "Cody Fisher",
      designation: "Software developer",
      img: "/images/user-big-3.png",
    },
    {
      id: 4,
      title: "Tasks 4",
      priority: "Low",
      date: "Jan 23, 2023 / 04:05 PM",
      name: "Cody Fisher",
      designation: "Software developer",
      img: "/images/user-big-4.png",
    },
    {
      id: 5,
      title: "Tasks 5",
      priority: "High",
      date: "Jan 23, 2023 / 04:05 PM",
      name: "Cody Fisher",
      designation: "Software developer",
      img: "/images/user-big-5.png",
    },
  ],
  "In Review": [
    {
      id: 6,
      title: "Tasks 6",
      priority: "High",
      date: "Jan 23, 2023 / 04:05 PM",
      name: "Cody Fisher",
      designation: "Software developer",
      img: "/images/user-big-1.png",
    },
    {
      id: 7,
      title: "Tasks 7",
      priority: "Medium",
      date: "Jan 23, 2023 / 04:05 PM",
      name: "Cody Fisher",
      designation: "Software developer",
      img: "/images/user-big-2.png",
    },
    {
      id: 8,
      title: "Tasks 8",
      priority: "Low",
      date: "Jan 23, 2023 / 04:05 PM",
      name: "Cody Fisher",
      designation: "Software developer",
      img: "/images/user-big-3.png",
    },
    {
      id: 9,
      title: "Tasks 9",
      priority: "Low",
      date: "Jan 23, 2023 / 04:05 PM",
      name: "Cody Fisher",
      designation: "Software developer",
      img: "/images/user-big-4.png",
    },
  ],
  Done: [
    {
      id: 10,
      title: "Tasks 10",
      priority: "High",
      date: "Jan 23, 2023 / 04:05 PM",
      name: "Cody Fisher",
      designation: "Software developer",
      img: "/images/user-big-5.png",
    },
    {
      id: 11,
      title: "Tasks 11",
      priority: "Medium",
      date: "Jan 23, 2023 / 04:05 PM",
      name: "Cody Fisher",
      designation: "Software developer",
      img: "/images/user-big-2.png",
    },
  ],
};
const currentDate = new Date();
const formattedDate =
  currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }) +
  " / " +
  currentDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

const Board = () => {
  const [tasks, setTasks] = useState(list);
  const [column, setColumn] = useState("In Progress");
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    priority: "High" as "High" | "Medium" | "Low",
    name: "",
    designation: "",
    img: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = () => {
    // Create a new task object with the form data
    const newTask: Task = {
      id:
        tasks.Done.length +
        tasks["In Progress"].length +
        tasks["In Review"].length +
        1,
      date: formattedDate,
      ...formData,
    };

    // Update the tasks state based on the priority of the new task
    const updatedTasks: Tasks = { ...tasks };
    updatedTasks[column as keyof Tasks].push(newTask);

    // Set the updated state and close the modal
    setTasks(updatedTasks);
    setFormData({
      title: "",
      priority: "High",
      name: "",
      designation: "",
      img: "",
    });
    setModalOpen(false);
  };
  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // If there's no destination or the item was dropped in the same place, do nothing
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    // Copy the source and destination task lists
    const updatedTasks: Tasks = { ...tasks };
    const sourceTasks: TaskList = [
      ...(updatedTasks[source.droppableId as keyof Tasks] as TaskList),
    ];
    const destinationTasks: TaskList = [
      ...(updatedTasks[destination.droppableId as keyof Tasks] as TaskList),
    ];

    // Remove the dragged task from the source list
    const [draggedTask] = sourceTasks.splice(source.index, 1);

    // Insert the dragged task into the destination list at the specified index
    destinationTasks.splice(destination.index, 0, draggedTask);

    // Update the tasks state
    updatedTasks[source.droppableId as keyof Tasks] = sourceTasks;
    updatedTasks[destination.droppableId as keyof Tasks] = destinationTasks;

    // Set the updated state
    setTasks(updatedTasks);
  };
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [modalOpen]);
  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
          {Object.keys(tasks).map((task) => (
            <StrictModeDroppable key={task} droppableId={task}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="col-span-12 md:col-span-6 xl:col-span-4">
                  <div className="box xl:p-8">
                    <div className="flex justify-between items-center bb-dashed mb-6 pb-6">
                      <p className="font-medium">{task}</p>
                      <OptionsVertical />
                    </div>
                    <div className="flex flex-col gap-6">
                      {tasks[task as keyof Tasks].map(
                        (
                          { date, designation, id, img, name, priority, title },
                          index
                        ) => (
                          <Draggable
                            key={id}
                            draggableId={`${id}`}
                            index={index}>
                            {(provided, snapshot) => (
                              <div
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                                data-isDragging={snapshot.isDragging}
                                className="box bg-primary/5 xl:p-6">
                                <div className="flex justify-between items-center mb-6 lg:mb-8">
                                  <div>
                                    <p className="text-xl font-semibold mb-2">
                                      {title}
                                    </p>
                                    <span className="text-sm">{date}</span>
                                  </div>
                                  <span
                                    className={`inline-block rounded-lg py-2 px-2 md:px-4 text-n0 text-sm ${
                                      priority == "High" && "bg-primary"
                                    } ${
                                      priority == "Medium" && "bg-secondary1"
                                    } ${priority == "Low" && "bg-secondary2"}`}>
                                    {priority}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <div className="flex gap-4 items-center">
                                    <Image
                                      src={img}
                                      width={40}
                                      height={40}
                                      alt="img"
                                      className="rounded-full"
                                    />
                                    <div>
                                      <p className="text-sm font-semibold mb-1">
                                        {name}
                                      </p>
                                      <span className="text-xs">
                                        {designation}
                                      </span>
                                    </div>
                                  </div>
                                  <OptionsVertical fromBottom={true} />
                                </div>
                              </div>
                            )}
                          </Draggable>
                        )
                      )}
                    </div>
                    <button
                      onClick={() => {
                        setModalOpen(true);
                        setColumn(task);
                      }}
                      className="btn-outline mt-6">
                      <IconCirclePlus />
                      Add New
                    </button>
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </StrictModeDroppable>
          ))}
        </div>
      </DragDropContext>
      {modalOpen ? (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed top-0 left-0 z-30 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`bg-n0 dark:bg-bg4 p-8 duration-300 rounded-md md:min-w-[500px] ${
              modalOpen ? "scale-100" : "scale-0"
            }`}>
            <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
            <form>
              {/* Title */}
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium ">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter Title"
                  value={formData.title}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-n30 dark:border-n500 bg-primary/5 rounded-md w-full focus:outline-none"
                />
              </div>

              {/* Priority */}
              <div className="mb-4">
                <label
                  htmlFor="priority"
                  className="block text-sm font-medium ">
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-n30 dark:border-n500 bg-primary/5 rounded-md w-full focus:outline-none">
                  <option className="bg-n0 dark:bg-bg4" value="High">
                    High
                  </option>
                  <option className="bg-n0 dark:bg-bg4" value="Medium">
                    Medium
                  </option>
                  <option className="bg-n0 dark:bg-bg4" value="Low">
                    Low
                  </option>
                </select>
              </div>

              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-n30 dark:border-n500 bg-primary/5 rounded-md w-full focus:outline-none"
                />
              </div>

              {/* Designation */}
              <div className="mb-4">
                <label
                  htmlFor="designation"
                  className="block text-sm font-medium ">
                  Designation
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  placeholder="Enter Designation"
                  value={formData.designation}
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-n30 dark:border-n500 bg-primary/5 rounded-md w-full focus:outline-none"
                />
              </div>

              {/* Image */}
              <div className="mb-4">
                <label htmlFor="img" className="block text-sm font-medium ">
                  Image URL
                </label>
                <input
                  type="text"
                  id="img"
                  name="img"
                  value={formData.img}
                  placeholder="/images/user-big-3.png"
                  onChange={handleFormChange}
                  className="mt-1 p-2 border border-n30 dark:border-n500 bg-primary/5 rounded-md w-full focus:outline-none"
                />
              </div>

              <button
                type="button"
                className="btn mt-4"
                onClick={handleFormSubmit}>
                Add Task
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Board;
