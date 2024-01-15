import Navbar from "./components/navbar/Navbar";
import { todayDiaryFormatted, months } from "./models/model";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [year, month, date] = todayDiaryFormatted.split("-");
  const allPlan = useSelector((state) => state.calendar.data);
  const allDiary = useSelector((state) => state.diary.data);
  const allTodo = useSelector((state) => state.todo.data);
  const navigate = useNavigate();

  const alreadyDiary = allDiary.find(
    (diary) => diary.date === todayDiaryFormatted
  );

  const thisMonthPlan = allPlan.find(
    (plan) => plan.month === months[parseInt(month) - 1] && plan.year == year
  );

  const todayPlan = thisMonthPlan
    ? thisMonthPlan.plan.find((p) => p.date == date)
    : null;


  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center items-center h-5/6">
        <div className="max-w-screen-xl md:flex items-center">
          <div className="grid justify-items-center md:mr-20">
            <div className="text-9xl">{date}</div>
            <div className="flex">
              <div className="text-3xl">{month}/</div>
              <div className="text-3xl">{year}</div>
            </div>
          </div>
          <div className="mt-10">
            <div
              className="bg-slate-200 p-10 m-3 rounded-md hover:bg-slate-300 cursor-pointer"
              onClick={() => navigate("/planner")}
            >
              <div className="text-xl font-semibold mb-3">Today's Plans 📜</div>
              <div>
                {todayPlan ? (
                  todayPlan.events.map((event, index) => (
                    <div className="text-xl" key={index}>
                      ‣ {event}
                    </div>
                  ))
                ) : (
                  <div className="text-xl">🫙 No Plan</div>
                )}
              </div>
            </div>
            <div
              className="bg-slate-200 p-10 m-3 rounded-md hover:bg-slate-300 cursor-pointer"
              onClick={() => navigate("/todolist")}
            >
              <div className="text-xl font-semibold mb-3">Todo-List 🎼</div>
              <div>
                {allTodo.map((todo, index) =>
                  !todo.done ? ( // Use ternary operator to conditionally render
                    <div className="text-xl" key={index}>
                      ‣ {todo.task}
                    </div>
                  ) : null
                )}
              </div>
            </div>
            <div
              className="bg-slate-200 p-10 m-3 rounded-md hover:bg-slate-300 cursor-pointer"
              onClick={() => {
                if (!alreadyDiary) {
                  navigate("/diary");
                }
              }}
            >
              <div className="text-xl font-semibold mb-3">Diary 🗒️</div>
              <div>
                {alreadyDiary ? (
                  <div className="text-xl">
                    🥰 You have already written today's diary 😄
                  </div>
                ) : (
                  <div className="text-xl">✏️ Go to write Today's Diary 🔥</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
