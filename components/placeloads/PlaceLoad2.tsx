const rows = Array.from({ length: 12 });
const PlaceLoad2 = () => {
  return (
    <div className="flex flex-col gap-4 overflow-x-auto w-full">
      {rows.map((_, i) => (
        <div
          key={i}
          className="border border-n30 dark:border-n500 w-full min-w-max flex gap-8 rounded-lg p-4  mx-auto bg-n0 dark:bg-bg4">
          <div className="animate-pulse flex gap-4 items-center w-48">
            <div className="rounded-xl bg-n40 dark:bg-n400 h-10 w-32"></div>
          </div>

          <div className="animate-pulse flex gap-1 items-center grow">
            <div className="rounded-full bg-n40 dark:bg-n400 h-10 w-10"></div>
            <div className="rounded-full bg-n40 dark:bg-n400 h-10 w-10"></div>
            <div className="rounded-full bg-n40 dark:bg-n400 h-10 w-10"></div>
            <div className="rounded-full bg-n40 dark:bg-n400 h-10 w-10"></div>
            <div className="rounded-full bg-n40 dark:bg-n400 h-10 w-10"></div>
          </div>
          <div className="animate-pulse flex gap-4 items-center w-48">
            <div className="rounded-xl bg-n40 dark:bg-n400 h-3 w-32"></div>
          </div>
          <div className="animate-pulse flex gap-4 items-center w-48">
            <div className="rounded-xl bg-n40 dark:bg-n400 h-3 w-32"></div>
          </div>
          <div className="animate-pulse flex gap-4 items-center w-48">
            <div className="rounded-xl bg-n40 dark:bg-n400 h-3 w-32"></div>
          </div>
          <div className="animate-pulse flex gap-4 items-center">
            <div className="rounded-full bg-n40 dark:bg-n400 h-16 w-16"></div>
            <div className="flex-1 space-y-3 py-1">
              <div className="h-3 bg-n40 dark:bg-n400 rounded w-40"></div>
              <div className="h-3 bg-n40 dark:bg-n400 rounded w-32"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceLoad2;
