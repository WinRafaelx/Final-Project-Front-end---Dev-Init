import React from "react";

const Todo = ({ data, task }) => {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">

    {
      task === "Done" ? (
        <div className="mb-4">
          <h1 className="text-grey-darkest">Done</h1>
        </div>
      ) : (
        <div className="mb-4">
          <h1 className="text-grey-darkest">Not Done</h1>
        </div>
      )
    }
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

          {data.map((item, index) => {
            return (
              <div className="flex mb-4 items-center" key={index}>
                <p className={`w-full text-grey-darkest
                  ${item.done ? "line-through" : ""}
                `}>{item.task}</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
                  Done
                </button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                  Remove
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Todo;
