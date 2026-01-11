import "./App.css";
import Todo from "./components/Todo.jsx";
import TodoTitle from "./components/TodoTitle.jsx";
import Popup from "./components/Popup.jsx";
import { useState, useEffect } from "react";
import Counter from "./components/Counter.jsx";

function App() {
  // return <Counter />
  // //exercise
  const [popupOpen, setPopupOpen] = useState(false);

  function togglePopup() {
    setPopupOpen(true);
  }
  function onClose() {
    setPopupOpen(false);
  }

  useEffect(() => {
    console.log("ONLY when component mounts or first mount(like youtube home refresh)");
    //with empty second argument "[]"
  }, [])

  useEffect(()=> {
    console.log(`When component mounts AND ${popupOpen} changes`);
    //with specific second argument [popupOpen]
  }, [popupOpen])

  useEffect(() => {
    console.log("On Every render");
    //without second Argument []
  })

  return (
    <>
      <TodoTitle />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setPopupOpen(true)}>Add to do</button>
      </div>
      <Todo
        togglePopup={togglePopup}
        task="Learn React"
        description="Code along and take notes"
      />
      <Todo
        togglePopup={togglePopup}
        task="Finish ASAP Frontend"
        description="3 Hours everyday"
      />
      <Todo
        togglePopup={togglePopup}
        task="Land a junior job"
        description="Apply to jobs 2 hours everyday"
      />
      <Todo
        togglePopup={togglePopup}
        task="Earn $100+"
        description="Live life and relax"
      />
      {popupOpen && (
        <Popup
          question="Are you 100% sure?"
          onClose={onClose}
        />
      )}
    </>
  );
}

export default App;
