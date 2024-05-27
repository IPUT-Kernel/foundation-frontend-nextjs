"use client";
import { useForm, Controller } from "react-hook-form";

const TagsInput = ({ tags, onChangeTags, teachers }) => {
  const handleChange = (e) => {
    if (teachers.includes(e.target.value)) {
      if (!tags.includes(e.target.value)) {
        onChangeTags([...tags, e.target.value]);
      }
      e.target.value = "";
    }
  };

  const handleDeleteTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    onChangeTags(newTags);
  };

  return (
    <div className="flex items-center mx-1 px-1 max-w-[150px] overflow-x-auto">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full mr-1 mb-1 flex items-center text-xs`}
        >
          {tag}
          <button
            type="button"
            className="ml-1 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => handleDeleteTag(index)}
          >
            &times;
          </button>
        </span>
      ))}
      <input
        type="text"
        className="py-1 min-w-[13px]"
        onChange={handleChange}
        placeholder={tags.length === 0 ? "教員" : ""}
        list="teachers-list"
      />
      <datalist id="teachers-list">
        {teachers.map((teacher, index) => (
          <option key={index} value={teacher} />
        ))}
      </datalist>
    </div>
  );
};

const CommonLecture = () => {
  const days = ["月", "火", "水", "木", "金"];
  const timeSlots = ["1", "2", "3", "4", "5", "6", "7"];

  const subjects = ["英語コミュニケーションIIa", "数学I", "物理学", "化学", "歴史"];
  const rooms = ["101", "102", "103", "104", "105"];
  const teachers = ["山田太郎", "鈴木一郎", "佐藤花子", "高橋二郎", "田中三郎"];

  const { control, handleSubmit, setValue, getValues } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-[60vh]">
      <div className="overflow-hidden bg-white shadow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <table className="min-w-full divide-y divide-gray-200 border border-gray-800 dark:border-gray-200">
            <thead className="bg-gray-50 dark:bg-bg4">
              <tr>
                <th className="py-1 w-[50px]  text-center text-xl font-medium text-gray-500 dark:text-n10 uppercase tracking-wider border border-gray-800 dark:border-gray-200">
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
              {timeSlots.map((timeSlot, timeIndex) => (
                <tr key={timeSlot}>
                  <td className="py-4 whitespace-nowrap text-xl text-center font-medium text-gray-800 dark:text-gray-200 border border-gray-800 dark:border-gray-200">
                    {timeSlot}
                  </td>
                  {days.map((day, dayIndex) => (
                    <td
                      key={day}
                      className="h-[120px]  whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200 border border-gray-800 dark:border-gray-200"
                    >
                      <table className="w-full h-full">
                        <tbody>
                          <tr className="h-[70%] flex items-center justify-center text-center">
                            <td
                              className="text-center text-sm h-full text-gray-900 dark:text-gray-200"
                              colSpan={2}
                            >
                              <Controller
                                name={`subject-${timeIndex}-${dayIndex}`}
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                  <>
                                    <input
                                      {...field}
                                      list={`subjects-${timeIndex}-${dayIndex}`}
                                      className="w-full h-full border-none text-center"
                                      placeholder=""
                                    />
                                    <datalist id={`subjects-${timeIndex}-${dayIndex}`}>
                                      {subjects.map((subject, index) => (
                                        <option key={index} value={subject} />
                                      ))}
                                    </datalist>
                                  </>
                                )}
                              />
                            </td>
                          </tr>
                          <tr className="flex justify-center h-[30%] items-center border-t border-gray-900 dark:border-gray-200">
                            <td className="px-1 py-1 w-[50%] h-full text-xs font-medium text-center border-r border-gray-800 dark:border-gray-200 text-gray-900 dark:text-gray-200">
                              <Controller
                                name={`room-${timeIndex}-${dayIndex}`}
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                  <>
                                    <input
                                      {...field}
                                      list={`rooms-${timeIndex}-${dayIndex}`}
                                      className="w-full h-full border-none "
                                      placeholder="教室番号"
                                    />
                                    <datalist id={`rooms-${timeIndex}-${dayIndex}`}>
                                      {rooms.map((room, index) => (
                                        <option key={index} value={room} />
                                      ))}
                                    </datalist>
                                  </>
                                )}
                              />
                            </td>
                            <td className="px-1 py-1 w-[50%] h-full text-xs font-medium text-center text-gray-900 dark:text-gray-200">
                              <Controller
                                name={`teachers-${timeIndex}-${dayIndex}`}
                                control={control}
                                defaultValue={[]}
                                render={({ field: { value, onChange } }) => (
                                  <TagsInput
                                    tags={value}
                                    onChangeTags={onChange}
                                    teachers={teachers}
                                  />
                                )}
                              />
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
          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded"
            >
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommonLecture;
