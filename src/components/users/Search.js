import { useContext } from "react";
import Users from "./Users";
import { fetchData } from "../../api/Api";
import React from "react";
import { ThemeContext } from "../../ThemContext";
import HistoryContext from "../../HistoryContext";

const Search = () => {
  const { text, setText, users, setUsers } = useContext(HistoryContext);
  const { darkMode } = useContext(ThemeContext);

  const searchUsers = async (text) => {
    try {
      const response = await fetchData(`/search/users?q=${text}`);
      setUsers(response.items);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something.");
    } else {
      searchUsers(text);
      localStorage.setItem("historySearch", text);
    }
  };

  const clearUsers = () => {
    setText("");
    setUsers([]);
    localStorage.clear();
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          id=""
          placeholder="Search User"
          value={text}
          onChange={onChange}
          className={`${darkMode ? "bg-white" : ""}`}
        />
        <input
          type="submit"
          value="Search"
          className={`btn btn-block ${darkMode ? "btn-white" : "btn-success"}`}
          id=""
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users users={users} />
    </div>
  );
};

export default Search;
