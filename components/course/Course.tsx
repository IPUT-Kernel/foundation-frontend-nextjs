import CourseCard from "./CourseCard";

const courses = [
  {
    title: "UI/UX Design",
    img: "/images/course-1.png",
    instructor: "Theresa Webb",
    instructorImg: "/images/user.png",
    lessons: 20,
    hours: 50,
    url: "#",
    completed: 100,
  },
  {
    title: "Graphic Design",
    img: "/images/course-2.png",
    instructor: "Cathryn Murphy",
    instructorImg: "/images/user-5.png",
    lessons: 20,
    hours: 50,
    url: "#",
    completed: 90,
  },
  {
    title: "Digital Marketing",
    img: "/images/course-3.png",
    instructor: "Ronald Richards",
    instructorImg: "/images/user-6.png",
    lessons: 20,
    hours: 50,
    url: "#",
    completed: 80,
  },
  {
    title: "Software Developer",
    img: "/images/course-4.png",
    instructor: "Jenny Wilson",
    instructorImg: "/images/user-2.png",
    lessons: 20,
    hours: 50,
    url: "#",
    completed: 100,
  },
  {
    title: "Scrum Master",
    img: "/images/course-5.png",
    instructor: "Jerome Bell",
    instructorImg: "/images/user-3.png",
    lessons: 20,
    hours: 50,
    url: "#",
    completed: 90,
  },
  {
    title: "Ethical Hacker",
    img: "/images/course-6.png",
    instructor: "Robert Fox",
    instructorImg: "/images/user-4.png",
    lessons: 20,
    hours: 50,
    url: "#",
    completed: 100,
  },
  {
    title: "Software Tester",
    img: "/images/course-7.png",
    instructor: "Cody Fisher",
    instructorImg: "/images/user-5.png",
    lessons: 20,
    hours: 50,
    url: "#",
    completed: 100,
  },
  {
    title: "Data Scientist",
    img: "/images/course-8.png",
    instructor: "Jane Cooper",
    instructorImg: "/images/user-6.png",
    lessons: 20,
    hours: 50,
    url: "#",
    completed: 90,
  },
];
const Course = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      {courses.map((course) => (
        <CourseCard key={course.title} {...course} />
      ))}
    </div>
  );
};

export default Course;
