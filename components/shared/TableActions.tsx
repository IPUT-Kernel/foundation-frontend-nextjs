"use client";
import useDropdown from "@/utils/useDropdown";
import { IconDotsVertical } from "@tabler/icons-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const TableActions = ({
  fromBottom,
  onDelete,
}: {
  fromBottom?: boolean;
  onDelete: () => void;
}) => {
  const { open, ref, toggleOpen } = useDropdown();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5D69F4",
      cancelButtonColor: "#FF6161",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Item Deleted Successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        onDelete();
      }
    });
  };

  return (
    <>
      <div className="relative top-0 " ref={ref}>
        <IconDotsVertical onClick={toggleOpen} className="cursor-pointer" />
        <ul
          className={`${
            open
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-0 invisible"
          } absolute ${
            fromBottom ? "bottom-0" : "top-0"
          } ltr:right-5 rtl:left-5 border z-30 dark:border-n500 min-w-max p-1.5 rounded-md bg-n0 dark:bg-bg4`}>
          <li>
            <button className="py-1.5 hover:bg-primary rounded-md hover:text-n30 duration-300 block px-3">
              Edit
            </button>
          </li>
          <li>
            <button
              onClick={handleDelete}
              className="py-1.5 hover:bg-primary rounded-md hover:text-n30 duration-300 block px-3">
              Delete
            </button>
          </li>
          <li>
            <button className="py-1.5 hover:bg-primary rounded-md hover:text-n30 duration-300 block px-3">
              Block
            </button>
          </li>
        </ul>
      </div>
      <ToastContainer />
    </>
  );
};

export default TableActions;
