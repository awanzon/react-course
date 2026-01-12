import { Link } from "react-router-dom"
function Nav() {
  return (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/users/mrbeast">Mr Beast</Link>
    <Link to="/users/kyliejenner">Kylie Jenner</Link>
    <Link to="/users/imancodes">Iman Codes</Link>
  </nav>
  );
}

export default Nav;