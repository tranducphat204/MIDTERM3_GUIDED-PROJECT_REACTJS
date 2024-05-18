import "./App.css";
import Navbar from "./components/layout/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Users from "./components/users/Users";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api.github.com/users")
        .then(function (response) {
          // xử trí khi thành công
          setUsers(response.data);
          console.log("GitHub Users:", response.data);
        })
        .catch(function (error) {
          // xử trí khi bị lỗi
          console.error("Error fetching data:", error);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Github Users Data</h1>
      </div>
      <Users users={users} />
    </div>
  );
}

export default App;
