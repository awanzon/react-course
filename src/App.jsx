import "./App.css";
import Todo from "./components/Todo.jsx";
import TodoTitle from "./components/TodoTitle.jsx";
import Popup from "./components/Popup.jsx"

function App() {
  return (
    <>
      <TodoTitle/>
      <Todo task="Learn React"/>
      <Todo task="Finish ASAP Frontend"/>
      <Todo task="Land a junior job"/>
      <Todo task="Earn $100+"/>
      {/* <Popup /> */}
    </>
  );
}

export default App;
