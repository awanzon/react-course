import { useEffect } from "react"
import axios from "axios"


function Home() {
  useEffect(() => {
    "https://jsonplaceholder.typicode.com/users"
  }, [])
  return <h1>Home</h1>
}

export default Home;