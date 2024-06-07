import { Fragment, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Repos from "../repos/Repos.js";
import { fetchData } from "../../api/Api.js";
import { ThemeContext } from "../../ThemContext.js";
const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [repos, setRepops] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  
  const getUser = async (username) => {
    try {
      const response = await fetchData(`/users/${username}`);
      setUser(response);
      console.log("This is data of user", response);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  const getUserRepos = async (username) => {
    try {
      const response = await fetchData(`users/${username}/repos`);
      setRepops(response);
      console.log("This is data of repos", response);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    getUser(id);
    getUserRepos(id);
  }, [id]);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:
      {hireable ? (
        <i className="fas fa-check text-success"></i>
      ) : (
        <i className="fas fa-times-circle text-danger"></i>
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt={name}
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            className={`btn my-1 ${darkMode ? "" : "btn-dark"}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Show Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong>
                  <a href={blog} target="_blank" rel="noopener noreferrer">
                    {blog}
                  </a>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
