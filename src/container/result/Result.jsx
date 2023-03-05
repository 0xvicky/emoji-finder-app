import React, { useState } from "react";
import "./Result.css";
import { Input, Card } from "../../components";
import * as emoji from "emoji-api";
const Result = () => {
  //useState variables
  const [emojiImg, setEmojiImg] = useState("");
  const [emojiDet, setEmojiDet] = useState({
    image: "",
    name: "",
    sub_group: "",
  });

  //All functions...

  function handleChange(e) {
    const { value } = e.target;
    setEmojiImg(value.toString());
  }

  function handleClick() {
    console.log("started....");
    const det = emoji.get(emojiImg);
    const {
      _data: { name, sub_group },
    } = det;
    console.log(name, sub_group);
    setEmojiDet({
      image: emojiImg,
      name: name,
      sub_group: sub_group,
    });
    setEmojiImg("");
  }

  // return (
  //   <>

  //   </>
  // );
  return (
    <>
      <div className="resCont flex flex-col items-center justify-evenly h-[85vh] ">
        <Input
          btnAction={handleClick}
          inpAction={handleChange}
          inpVal={emojiImg}
        />
        {emojiDet.name && (
          <Card
            emjImg={emojiDet.image}
            emjName={emojiDet.name.toUpperCase()}
            emjSbGrp={emojiDet.sub_group}
            emjDescp={`lorem ipsum dolor`}
          />
        )}
      </div>
    </>
  );
};

export default Result;

//Add input and card
//shift all function to result.jsx and configure the props in those components accordingly....
