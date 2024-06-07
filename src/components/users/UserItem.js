import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ThemeContext } from "../../ThemContext";

const UserItem = (props) => {
  const { login, avatar_url } = props.user;
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="card text-center">
      <img
        className="round-img"
        src={avatar_url}
        alt=""
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          className={`btn btn-sm my-1 ${darkMode ? "" : "btn-dark"}}`}
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
