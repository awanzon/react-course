import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);
  async function fetchData() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setUsers(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {users.length > 0 ? <h1>{users[2]?.username}</h1> : <h1>Loaading...</h1>};
    </div>
  );
}

export default Home;
