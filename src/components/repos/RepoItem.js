import { useContext } from "react";
import { ThemeContext } from "../../ThemContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const RepoItem = (props) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Repository Name: {props.repo.name}</h3>
        <p className="card-text">
          Repository description: {props.repo.description}
        </p>
        <p className="text-underline">Clone URL: {props.repo.clone_url}</p>
        <p className="btn btn-success">Language: {props.repo.language}</p>
        <Link
          to={props.repo.html_url}
          className={`btn ${darkMode ? "" : "btn-dark"}btn-sm my-1`}
          target="_blank"
          rel="noreferrer"
        >
          View Repo
        </Link>
      </div>
    </div>
  );
};

export default RepoItem;
