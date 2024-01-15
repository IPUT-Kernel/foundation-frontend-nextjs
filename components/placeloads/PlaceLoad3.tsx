const rows = Array.from({ length: 12 });
const PlaceLoad3 = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      {rows.map((_, i) => (
        <div
          key={i}
          className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 border border-n30 dark:border-n500 w-full min-w-max flex flex-col items-center justify-center gap-8 rounded-lg p-4 xl:p-6 mx-auto bg-n0 dark:bg-bg4">
          <div className="animate-pulse flex gap-4 items-center justify-center w-48">
            <div className="rounded-full bg-n40 dark:bg-n400 h-24 w-24"></div>
          </div>
          <div className="animate-pulse flex flex-col gap-4 items-center w-48">
            <div className="rounded-xl bg-n40 dark:bg-n400 h-3 w-48"></div>
            <div className="rounded-xl bg-n40 dark:bg-n400 h-2 w-32"></div>
          </div>
          <div className="animate-pulse flex flex-col gap-2 grow w-full">
            <div className="rounded-md bg-n40 dark:bg-n400 h-3 w-full"></div>
            <div className="rounded-md bg-n40 dark:bg-n400 h-3 w-full"></div>
            <div className="rounded-md bg-n40 dark:bg-n400 h-3 w-11/12"></div>
            <div className="rounded-md bg-n40 dark:bg-n400 h-3 w-8/12"></div>
          </div>
          <div className="animate-pulse flex gap-1 items-center grow">
            <div className="rounded-full bg-n40 dark:bg-n400 h-10 w-10"></div>
            <div className="rounded-full bg-n40 dark:bg-n400 h-10 w-10"></div>
            <div className="rounded-full bg-n40 dark:bg-n400 h-10 w-10"></div>
            <div className="rounded-full bg-n40 dark:bg-n400 h-10 w-10"></div>
          </div>
          {/* <div className="animate-pulse flex gap-4 items-center">
            <div className="rounded-xl bg-n40 dark:bg-n400 h-10 w-32"></div>
            <div className="rounded-xl bg-n40 dark:bg-n400 h-10 w-32"></div>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default PlaceLoad3;
