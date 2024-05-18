import RepoItem from "./RepoItem";

const Repos = (props) => {

    return (
      <div>
        <h1>Repos</h1>
        <RepoItem repo={props.repos} />
      </div>
    );
}

export default Repos;