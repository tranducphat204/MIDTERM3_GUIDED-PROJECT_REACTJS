import RepoItem from "./RepoItem";

const Repos = (props) => {
  const { repos } = props; 

  return (
    <div>
      <h1>Repos</h1>
      {repos.map((repo, index) => (
        <RepoItem key={index} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;