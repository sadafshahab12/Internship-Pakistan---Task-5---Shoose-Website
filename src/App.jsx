import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const user = "alice";
  const [showText, setShowText] = useState(false);
  const handleShowText = () => {
    setShowText(!showText);
  };
  const [inputValue, setInputValue] = useState("");
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

  const [searchQuery, setSearchQuery] = useState("");
  const dataArray = ["book", "cap", "data", "page", "pencil"];
  const [filterdata, setFilterData] = useState(dataArray);

  const filteredData = filterdata.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );
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

      <div>
        <input
          type="text"
          placeholder="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>No items found</p>
        )}
      </div>
    </>
  );
}

export default App;
