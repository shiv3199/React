import Body from "./component/Body";
import { useState } from "react";

const App = () => {
  const [message, setMessage] = useState([
    {
      message: "hello",
      sender: "user",
      id: "1",
    },
    {
      message: "robot here",
      sender: "robot",
      id: "2",
    },
    {
      message: "normal talk",
      sender: "robot",
      id: "3",
    },
    {
      message: "nahi karuga",
      sender: "user",
      id: "4",
    },
    {
      message: "kar le jo karna hai",
      sender: "user",
      id: "5",
    },
  ]);
  const [text, setText] = useState("");

  function newMessage() {
    setMessage([
      ...message,
      {
        message: "test",
        sender: "user",
        id: crypto.randomUUID(),
      },
    ]);
    console.log(message);
  }

  function textChange(event) {
    setText(event.target.value);
  }
  function sendMessage() {
    setMessage([
      ...message,
      {
        message: text,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ], setText(''));
  }

  return (
    <>
      <input type="text" placeholder="type here" onChange={textChange} />
      <button onClick={sendMessage}>send</button>
      {message.map((m) => {
        return <Body message={m.message} sender={m.sender} key={m.id} />;
      })}
    </>
  );
};
export default App;
