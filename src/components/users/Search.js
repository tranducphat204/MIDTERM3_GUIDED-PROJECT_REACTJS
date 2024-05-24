import { useState } from "react";
import Users from "./Users";
import { fetchData } from "../../api/Api";
import React from "react";

const Search = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  const searchUsers = async (text) => {
    try {
      const response = await fetchData(`/search/users?q=${text}`);
      setUsers(response.items);
      console.log(response);
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
  const historySearch = localStorage.getItem("historySearch");
 
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
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
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
