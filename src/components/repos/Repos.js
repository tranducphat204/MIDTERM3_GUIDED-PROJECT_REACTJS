import RepoItem from "./RepoItem";

const Repos = (props) => {
  const { repos } = props; // Extract the 'repos' property from 'props'

  return (
    <div>
      <h1>Repos</h1>
      {repos.map((repo) => (
        <RepoItem repo={repo} />
      ))}
    </div>
  );
};

export default Repos;