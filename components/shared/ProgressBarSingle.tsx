"use client";
import { useEffect, useRef, useState } from "react";

const ProgressBarSingle = ({
  bg,
  width,
  height,
}: {
  bg: string;
  width: number;
  height?: string;
}) => {
  const [isInView, setIsInView] = useState(false);
  const progress = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const progressRef = progress.current;
    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.2, // Adjust this threshold as needed
      }
    );

    if (progressRef) {
      progressObserver.observe(progressRef);
    }

    return () => {
      if (progressRef) {
        progressObserver.unobserve(progressRef);
      }
    };
  }, []);

  return (
    <div
      ref={progress}
      className={`bar ${
        height ? height : "h-2"
      } rounded-full bg-opacity-20 ${bg}`}>
      <div
        style={{ width: `${width}%` }}
        className={`rounded-full ${bg} ${isInView ? "progress-grow" : ""} ${
          height ? height : "h-2"
        }`}></div>
    </div>
  );
};

export default ProgressBarSingle;
