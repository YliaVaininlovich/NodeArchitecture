import React, { useState } from "react";
import Voice from "./voice";

let init = [
  {
    name: "Вася Иванов",
    voice: 3,
  },
  {
    name: "Петя Сидоров",
    voice: 4,
  },
  {
    name: "Катя Петрова",
    voice: 7,
  },
  {
    name: "Саша Козлов",
    voice: 1,
  },
];

let key = 0;

const VoiceList = () => {
  const [result, setResult] = useState(false);

  const cbNewVoiting = (keyID) => {
    init[keyID].voice++;
    setResult(!result);
    key = 0;
    init.map((item) => console.log(item.voice));
  };

  return (
    <div>
      {init.map((item, keyID = key) => (
        <Voice keyID={keyID++} item={item} cbNewVoiting={cbNewVoiting} />
      ))}
    </div>
  );
};

export default VoiceList;
