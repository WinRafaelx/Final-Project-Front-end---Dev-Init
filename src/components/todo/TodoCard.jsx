import React from "react";

function TodoCard({ task, state, onTask, onRemove }) {
  return (
    <div className="flex mb-4 items-center">
      <p className={`w-full text-grey-darkest ${state ? "line-through" : ""}`}>
        {task}
      </p>
      <button
        className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-slate-300 hover:border-slate-300
                  ${
                    state
                      ? "text-orange-400 border-orange-400"
                      : "text-green-500 border-green-600"
                  }
                  `}
        onClick={() => onTask(task)}
      >
        {state ? "Edit" : "Done"}
      </button>
      <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-rose-600 border-rose-600 hover:text-slate-300 hover:border-slate-300"
      onClick={() => onRemove(task)}>
        Remove
      </button>
    </div>
  );
}

export default TodoCard;
