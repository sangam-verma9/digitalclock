import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [currtime, nexttime] = useState(time);
  const gettime = () => {
    let s = new Date().toLocaleTimeString();
    nexttime(s);
  };
  setInterval(gettime, 1000);
  return (
    <>
      <h1>⌚Digital Clock⌚</h1>
      <h2 className="col">{currtime}</h2>
    </>
  );
};

export default App;
