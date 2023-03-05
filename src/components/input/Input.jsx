import React from "react";

const Input = (props) => {
  return (
    <>
      <div className="input flex justify-center mt-10">
        <input
          type="text"
          placeholder="Enter emoji"
          className="outline outline-1 outline-orange-400 focus:outline-orange-500 focus:outline-2 p-3 caret-orange-500 text-orange-500 rounded-sm mr-10 text-6xl"
          // maxLength={1}
          onChange={props.inpAction}
          value={props.inpVal}
        />
        <button
          className="bg-orange-500 text-white p-4  hover:drop-shadow-2xl"
          onClick={props.btnAction}
        >
          Find
        </button>
      </div>
    </>
  );
};

export default Input;
