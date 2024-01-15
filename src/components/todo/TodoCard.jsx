import React, { useState} from "react";
import { removeTodo, swapDone } from "../../libs/TodoSlice";
import { useDispatch } from "react-redux";
import ModalEdit from "./ModalEdit";

function TodoCard({ task, state, id }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleRemove = (id) => {
    dispatch(
      removeTodo({
        id: id,
      })
    );
  };

  const handleSwap = (id) => {
    dispatch(
      swapDone({
        id: id,
      })
    );
  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex mb-4 items-center">
      <p className={`w-full text-grey-darkest ${state ? "line-through" : ""}`}>
        {task}
      </p>
      <div className="flex">
        <button
          className={`p-2 ml-4 border-2 rounded hover:text-slate-300 hover:border-slate-300
                  ${
                    state
                      ? "text-slate-300 border-slate-300"
                      : "text-green-500 border-green-600"
                  }
                  `}
          onClick={() => handleSwap(id)}
        >
          {state ? "Not" : "Done"}
        </button>
        <button
          className=" p-2 ml-2 border-2 rounded text-amber-500 border-amber-500 hover:text-slate-300 hover:border-slate-300"
          onClick={() => openModal()}
        >
          Edit
        </button>
        <ModalEdit isOpen={showModal} onRequestClose={closeModal} task={task} id={id} />
        <button
          className="p-2 ml-2 border-2 rounded text-rose-500 border-rose-500 hover:text-slate-300 hover:border-slate-300"
          onClick={() => handleRemove(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
