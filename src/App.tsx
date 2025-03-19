import { useState, useEffect } from "react";
import "./App.css";
import butn from "./assets/button.svg";

function App() {
  const [count, setCount] = useState<number>(() => {
    return Number(sessionStorage.getItem("count")) || 0;
  });
  
  useEffect(() => {
    sessionStorage.setItem("count", count.toString());
  }, [count]);
  

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          <img src={butn} alt="Button Icon" className="button-icon" />
        </button>
        <br />count is {count}
      </div>
    </>
  );
}

export default App;
