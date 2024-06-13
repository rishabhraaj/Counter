import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { privacyAcions } from "../store/privacy";
import { counterActions } from "../store/counter";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSub = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyAcions.toggle());
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            onClick={handleIncrement}
          >
            +1
          </button>
          <button
            type="button"
            className="btn btn-success btn-lg px-4 gap-3"
            onClick={handleDecrement}
          >
            -1
          </button>
          <button
            type="button"
            className="btn btn-dark btn-lg px-4 gap-3"
            onClick={handlePrivacyToggle}
          >
            Privacy Toggle
          </button>
        </div>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
          <input
            type="number"
            placeholder="Enter number"
            className="number-input"
            ref={inputElement}
          />

          <button
            type="button"
            className="btn btn-warning btn-lg px-4 gap-3"
            onClick={handleAdd}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg px-4 gap-3"
            onClick={handleSub}
          >
            Subtract
          </button>
        </div>
      </div>
    </>
  );
};

export default Controls;
