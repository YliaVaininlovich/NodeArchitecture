import React, { useState } from "react";
import Voice from "./voice";

let result = [
  {
    key:0,
    name: "Мне нравится Java",
    voice: 3,
  },
  {
    key:1,
    name: "Мне нравится JavaScript",
    voice: 4,
  },
  {
    key:2,
    name: "Мне нравится C#",
    voice: 7,
  },
  {
    key:3,
    name: "Мне не нравится программирование",
    voice: 1,
  },
];

let key = 0;

const VoiceList = () => {
  const [state, setState] = useState(false);

  const cbNewVoiting = (keyID) => {
    result[keyID].voice++;
    setState(!state);
    key = 0;
  };

  return (
    <div>
      {result.map((item, keyID = key) => (
        <Voice keyID={keyID++} item={item} cbNewVoiting={cbNewVoiting} />
      ))}
    </div>
  );
};

export default VoiceList;
