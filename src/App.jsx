import "./App.css";
import Todo from "./components/Todo.jsx";
import TodoTitle from "./components/TodoTitle.jsx";
import Popup from "./components/Popup.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  return <Counter />
  //exercise
  const [popupOpen, setPopupOpen] = useState(false);

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
      <Todo task="Learn React" description="Code along and take notes" />
      <Todo task="Finish ASAP Frontend" description="3 Hours everyday" />
      <Todo
        task="Land a junior job"
        description="Apply to jobs 2 hours everyday"
      />
      <Todo task="Earn $100+" description="Live life and relax" />
      {popupOpen && (
        <Popup question="Are you sure?" onClose={() => setPopupOpen(false)} />
      )}
    </>
  );
}

export default App;
