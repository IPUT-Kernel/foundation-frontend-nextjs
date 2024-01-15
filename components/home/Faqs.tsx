import Link from "next/link";
import Faq from "./Faq";

const faqData = [
  {
    id: 1,
    question: "Is DashBoi suitable for beginners?",
    answer:
      "Yes, DashBoi is beginner-friendly with an easy-to-navigate interface and comprehensive documentation. ",
  },
  {
    id: 2,
    question: "Can I customize the look and feel of DashBoi?",
    answer:
      "Absolutely! DashBoi is highly customizable, allowing you to modify colors, layouts, and components effortlessly.",
  },
  {
    id: 3,
    question: "What technologies does DashBoi support?",
    answer:
      "DashBoi supports modern web technologies, built on Next.js and styled with Tailwind CSS.",
  },
  {
    id: 4,
    question: "Can I use DashBoi for commercial projects?",
    answer:
      "Yes, DashBoi is licensed for commercial use, making it suitable for both personal and commercial projects.",
  },
  {
    id: 5,
    question: "How can I get started with DashBoi?",
    answer:
      "Getting started is easy! Follow the documentation for quick installation, customization, and usage guidance.",
  },
];
const FaQs = () => {
  return (
    <section
      id="faqs"
      className="bg-[url(/images/home/smartui-bg.png)] bg-cover bg-no-repeat py-14 xxl:py-28 bg-primary/5 dark:bg-bg3">
      <div className="container grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 lg:col-span-6">
          <h5 className="h5 text-primary font-semibold mb-2 lg:mb-4">FAQs</h5>
          <h2 className="h2 mb-4 lg:mb-6">Frequently Asked Questions</h2>
          <p className="mb-7 lg:mb-10 text-sm md:text-base">
            Here are the FAQs along with brief and easy-to-understand answers.
            Unlike traditional currencies, cryptocurrencies operate on
            decentralized networks based on blockchain technology.
          </p>
          <Link href="/dashboards/personal-1" className="btn">
            View Dashboard
          </Link>
        </div>
        <div className="col-span-12 lg:col-span-6 xxl:col-span-5 xxl:col-start-8">
          <Faq faqData={faqData} />
        </div>
      </div>
    </section>
  );
};

export default FaQs;
