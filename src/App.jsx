import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./components/Parent";

function App() {
  const user = "alice";
  const [showText, setShowText] = useState(false);
  const handleShowText = () => {
    setShowText(!showText);
  };
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("Add some input value");
      console.log("Add some input value");
      return;
    } else {
      alert("Form submitted");
      console.log("Form submitted");
    }
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  const [todoes, setTodoes] = useState([]);
  const [input, setInput] = useState("");
  const handleAddTodoes = (e) => {
    e.preventDefault();
    setTodoes([...todoes, input]);
    setInput("");
  };
  return (
    <>
      <Parent user={user} />
      <button onClick={handleShowText}>{showText ? "Hide" : "Show"}</button>
      {showText && <p> hellow</p>}

      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          placeholder="userName"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        {data.id}
        {data.title}
      </div>

      <div>
        <h1>Todo list app</h1>
        <input
          type="text"
          placeholder="todo list"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodoes}>add</button>
        <ul>
          {todoes && todoes.map((li, index) => <li key={index}> {li}</li>)}
        </ul>
      </div>
    </>
  );
}

export default App;
