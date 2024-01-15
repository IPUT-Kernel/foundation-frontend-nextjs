"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
type faqType = {
  id: number;
  question: string;
  answer: string;
};
const Faq = ({ faqData }: { faqData: faqType[] }) => {
  const [opened, setOpened] = useState<null | number>(3);
  return (
    <div className="flex flex-col gap-4">
      {faqData.map(({ id, answer, question }) => (
        <div key={id} className="rounded-2xl bg-n0 dark:bg-bg4">
          <div
            className="flex cursor-pointer select-none items-center justify-between gap-2 px-6 xl:px-8 py-4 box border-none"
            onClick={() => setOpened((p) => (p == id ? null : id))}>
            <div className="flex items-center gap-2">
              <h6 className="text-sm sm:text-base md:text-lg font-medium">
                {question}
              </h6>
            </div>
            <span
              className={`block rounded-full text-n0 ${
                id == opened ? "bg-secondary2" : "bg-primary"
              } p-1 text-n8`}>
              {id == opened ? (
                <IconMinus size={22} />
              ) : (
                <IconPlus
                  className={`${id == opened && "rotate-90"} duration-300`}
                  size={22}
                />
              )}
            </span>
          </div>
          <AnimateHeight height={opened == id ? "auto" : 0}>
            <p className="mx-7 border-t border-dashed text-sm md:text-base border-primary/20 pb-4 pt-3">
              {answer}
            </p>
          </AnimateHeight>
        </div>
      ))}
    </div>
  );
};

export default Faq;
