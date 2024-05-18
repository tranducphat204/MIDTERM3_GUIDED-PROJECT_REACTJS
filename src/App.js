import "./App.css";
import Navbar from "./components/layout/Navbar";
import { useEffect } from "react";
import axios from "axios";
function App() {
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api.github.com/users")
        .then(function (response) {
          // xử trí khi thành công
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
        <h1>Hello from react</h1>
      </div>
    </div>
  );
}

export default App;
