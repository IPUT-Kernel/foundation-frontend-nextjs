// "use client";
// import useDropdown from "@/utils/useDropdown";
// import { IconChevronDown } from "@tabler/icons-react";
// import Link from "next/link";
const selectOptions = ["All", "None", "Read", "Unread", "Starred", "Unstarred"];
// const SelectOptions = () => {
//   const { open, ref, toggleOpen } = useDropdown();
//   console.log(open);
//   return (
//     <div className="relative">
//       <span onClick={toggleOpen} className="flex items-center">
//         <IconChevronDown size={22} />
//       </span>
//       <div ref={ref}>
//         <ul
//           className={`absolute hidden ${
//             open && "flex"
//           } top-8 left-0 z-[3] flex-col w-40 bg-n0 rounded-md dark:bg-bg4 border border-n30 dark:border-n500`}>
//           {selectOptions.map((option) => (
//             <li key={option}>
//               <Link
//                 className="px-5 py-2 hover:bg-primary/10 block duration-300"
//                 href="#">
//                 {option}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SelectOptions;
import useDropdown from "@/utils/useDropdown";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";

const SelectOptions = () => {
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div ref={ref} className="relative">
      <button onClick={toggleOpen} className="flex items-center">
        <IconChevronDown size={22} />
      </button>
      <div
        className={`absolute ltr:origin-top-left rtl:origin-top-right ${
          open ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"
        } top-full rtl:right-0 ltr:-left-5 z-10 flex-col w-40 bg-n0 rounded-md py-2 dark:bg-bg4 border min-w-[220px] border-n30 dark:border-n500`}>
        <ul>
          {selectOptions.map((option) => (
            <li key={option}>
              <Link
                className="px-5 py-2 hover:bg-primary/10 block duration-300"
                href="#">
                {option}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectOptions;
