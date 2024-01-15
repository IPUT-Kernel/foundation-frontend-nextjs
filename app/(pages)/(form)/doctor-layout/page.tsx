import Doctor from "@/components/form/Doctor";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const DoctorFormPage = () => {
  return (
    <>
      <Banner
        title="Doctor"
        links={
          <Link href="#" className="btn">
            See Appointments
          </Link>
        }
      />
      <Doctor />
    </>
  );
};

export default DoctorFormPage;
