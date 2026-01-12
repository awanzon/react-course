import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Users() {
  const {userName} = useParams()

  useEffect(() => {
    fetch(`https://tiktok.api.com/${userName}`)
  }, [])
  console.log("reloaded pal");
  
  return (
    <div>{userName}</div>
  )
}

export default Users;