import React from "react";
import "./Card";
const Card = (props) => {
  return (
    <>
      <div className="card flex flex-col w-72 h-72 p-6 bg-orange-500 rounded-3xl text-white">
        <h2 className="m-auto text-7xl">{`${props.emjImg}`}</h2>
        <h4 className="font-bold text-xl">{`Name: ${props.emjName}`}</h4>
        <p>{`Group: ${props.emjSbGrp}`}</p>
      </div>
    </>
  );
};

export default Card;
