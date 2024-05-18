const RepoItem = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Repository Name: {props.repo.name}</h3>
        <p className="card-text">
          Repository description: {props.repo.description}
        </p>
        <p className="text-underline">Clone URL: {props.repo.clone_url}</p>
        <p className="btn btn-success">Language: {props.repo.language}</p>
        <a
          href={props.repo.html_url}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          View Repo
        </a>
      </div>
    </div>
  );
};

export default RepoItem;
