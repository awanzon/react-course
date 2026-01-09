import { useState } from "react";
let initialUser = { name: "Awan", age: 24 }
function Counter() {
  const [user, setCount] = useState(initialUser);

  return (
    <div>
      <h1>
        Counter:{user.age} {user.name}
      </h1>
      <button
        onClick={() => {
          setCount((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prevUser) => ({ ...prevUser, age: prevUser.age - 1 }));
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(initialUser)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
