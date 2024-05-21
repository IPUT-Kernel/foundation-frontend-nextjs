"use client";
const CommonLecture = () => {
  const days = ["月", "火", "水", "木", "金"];
  const timeSlots = ["1", "2", "3", "4", "5", "6", "7"];

  return (
    <>
      <div className="min-h-[60vh]">
        <div className="overflow-hidden bg-white shadow ">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-800 dark:border-gray-200">
            <thead className="bg-gray-50 dark:bg-bg4">
              <tr>
                <th className="px-1 py-1 w-[80px] text-center text-xl font-medium text-gray-500 dark:text-n10 uppercase tracking-wider border border-gray-800 dark:border-gray-200">
                  時限
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    colSpan={2}
                    className="px-6 py-1 text-center text-xl font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider border border-gray-800 dark:border-gray-200"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-bg4">
              {timeSlots.map((timeSlot, rowIndex) => (
                <>
                  <tr key={`main-${rowIndex}`}>
                    <td
                      className="px-1 py-4 whitespace-nowrap text-xl text-center font-medium  text-gray-800 dark:text-gray-200 border border-gray-800 dark:border-gray-200"
                      rowSpan={2}
                    >
                      {timeSlot}
                    </td>
                    {days.map((day, colIndex) => (
                      <td
                        key={`${rowIndex}-${colIndex}`}
                        colSpan={2}
                        className="px-6 py-4 h-[70px] whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-800 dark:border-gray-200"
                      >
                        <div className="h-[60%] flex items-center justify-center">授業名</div>
                      </td>
                    ))}
                  </tr>
                  <tr key={`sub-${rowIndex}`}>
                    {days.map((day, colIndex) => (
                      <>
                        <td
                          key={`room-${rowIndex}-${colIndex}`}
                          className="px-1 py-1 whitespace-nowrap text-xs font-medium text-center text-gray-900 border border-gray-800 dark:border-gray-200"
                        >
                          教室番号
                        </td>
                        <td
                          key={`teacher-${rowIndex}-${colIndex}`}
                          className="px-1 py-1 whitespace-nowrap text-xs font-medium text-center text-gray-900 border border-gray-800 dark:border-gray-200"
                        >
                          教員名
                        </td>
                      </>
                    ))}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CommonLecture;
