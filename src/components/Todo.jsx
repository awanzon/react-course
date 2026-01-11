function Todo({task, description, togglePopup}) {
  function deleteHandler() {
    console.log("Delete", task[0]);
    
  }

  return (
    <div className="todo-item">
      <button onClick={() => togglePopup()}>
        <h3>{task}</h3>
      </button>
      <p>{description}</p>
      <button onClick={() => togglePopup()}>Delete</button>
    </div>
  );
}

export default Todo;
