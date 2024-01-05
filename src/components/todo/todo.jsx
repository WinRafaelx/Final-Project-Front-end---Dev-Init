import React from "react";

const Todo = ({ data, task }) => {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white border-t-2 rounded shadow-md p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        {task === "Done" ? (
          <div className="mb-4">
            <h1 className="text-grey-darkest">Done</h1>
          </div>
        ) : (
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
              />
              <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
                Add
              </button>
            </div>
          </div>
        )}
        <div>
          {data.map((item, index) => {
            return (
              <div className="flex mb-4 items-center" key={index}>
                <p
                  className={`w-full text-grey-darkest ${
                    item.done ? "line-through" : ""
                  }`}
                >
                  {item.task}
                </p>
                <button
                  className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-slate-300 hover:border-slate-300
                  ${
                    item.done
                      ? "text-orange-400 border-orange-400"
                      : "text-green-500 border-green-600"
                  }
                  `}
                >
                  {item.done ? "Edit" : "Done"}
                </button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-rose-600 border-rose-600 hover:text-slate-300 hover:border-slate-300">
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
