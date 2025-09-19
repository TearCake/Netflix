import Navbar from "../../components/navbar/Navbar.jsx";
import Featured from "../../components/featured/Featured.jsx";
import List from "../../components/list/List.jsx";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured  />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}
