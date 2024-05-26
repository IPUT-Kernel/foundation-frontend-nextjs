"use client";
const CommonLecture = () => {
  const days = ["月", "火", "水", "木", "金"];
  const timeSlots = ["1", "2", "3", "4", "5", "6", "7"];

  return (
    <>
      <div className="min-h-[60vh]">
        <div className="overflow-hidden bg-white shadow">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-800 dark:border-gray-200">
            <thead className="bg-gray-50 dark:bg-bg4">
              <tr>
                <th className="py-1 w-[50px] text-center text-xl font-medium text-gray-500 dark:text-n10 uppercase tracking-wider border border-gray-800 dark:border-gray-200">
                  時限
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="px-6 py-1 text-center text-xl font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider border border-gray-800 dark:border-gray-200"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-bg4">
              {timeSlots.map((timeSlot) => (
                <tr key={timeSlot}>
                  <td className="py-4 whitespace-nowrap text-xl text-center font-medium text-gray-800 dark:text-gray-200 border border-gray-800 dark:border-gray-200">
                    {timeSlot}
                  </td>
                  {days.map((day) => (
                    <td
                      key={day}
                      className="h-[90px] whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200 border border-gray-800 dark:border-gray-200"
                    >
                      <table className="w-full h-full">
                        <tbody>
                          <tr className="h-[70%] flex items-center justify-center text-center">
                            <td
                              className="text-center text-sm text-gray-900 dark:text-gray-200"
                              colSpan={2}
                            >
                              英語コミュニケーションIIa
                            </td>
                          </tr>
                          <tr className="flex justify-wenter h-[30%] items-center border-t border-gray-900 dark:border-gray-200">
                            <td className="px-1 py-1 w-[50%] h-full text-xs font-medium text-center border-r border-gray-800 dark:border-gray-200 text-gray-900 dark:text-gray-200">
                              教室番号
                            </td>
                            <td className="px-1 py-1 w-[50%] h-full text-xs font-medium text-center text-gray-900 dark:text-gray-200">
                              教員名
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CommonLecture;
