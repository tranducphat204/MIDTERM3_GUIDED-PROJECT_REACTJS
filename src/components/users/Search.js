import { useState, createContext, useContext } from "react";
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
      // setText("");
    }
  };

  const clearUsers = () => {
    setUsers([]);
  };

  const onChange = (e) => setText(e.target.value);

  const TargetContext = React.createContext({ search: "" });
  const { search = "" } = useContext(TargetContext);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <TargetContext.Provider value={text}>
          <input
            type="text"
            name="text"
            id=""
            placeholder="Search User"
            value={text}
            onChange={onChange}
          />
        </TargetContext.Provider>
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
