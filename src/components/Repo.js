import React from "react";
import { useParams } from "react-router-dom";
import "./Repo.css";

function Repo() {
  const params = useParams();
  const [repo, setRepo] = React.useState();
  React.useEffect(() => {
    (async () => {
      let data = await fetch(
        `https://api.github.com/repos/adelodun1/${params.repo}`
      );
      data = await data.json();
      setRepo(data);
    })();
    return setRepo(null);
  }, [params]);
  return repo ? (
    <div className="repo-details">
      <div className="repo-name">{repo.name}</div>
      {repo.description ? (
        <div className="repo-descr">{repo.description}</div>
      ) : null}
      <div className="repo-meta">
        <span>Language: {repo.language}</span>
        <span>License: {repo.license?.name ? repo.license.name : "None"}</span>
        <span>Created: {repo.created_at.slice(0, 10)}</span>
        <span>Last Updated: {repo.updated_at.slice(0, 10)}</span>
      </div>
      <div></div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Repo;
