const RepoItem = (props) => {
    return (
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">{props.repo.name}</h5>
                <p className="card-text">{props.repo.description}</p>
                <a href={props.repo.html_url} className="btn btn-primary" target="_blank" rel="noreferrer">View Repo</a>
            </div>
        </div>
    )
}

export default RepoItem;