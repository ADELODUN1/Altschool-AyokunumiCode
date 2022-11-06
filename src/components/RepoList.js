import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import "./RepoList.css";

function RepoList() {
  const [repoList, setRepoList] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await fetch("https://api.github.com/users/adelodun1/repos");
      data = await data.json();
      setRepoList(data);
    })();
  }, []);
  const repoDisp = repoList.map((repo) => {
    return (
      <div key={repo.id} className="repo-card">
        <NavLink to={`/repos/${repo.name}`} className="link-to-repo">
          {repo.name}
        </NavLink>
        {repo.description ? <div>{repo.description}</div> : null}
        <div>
          <div>
            <span>Language: </span>
            <span>{repo.language ? repo.language : "None"}</span>
          </div>
          <div>
            <span>Last updated: </span>
            <span>{repo.updated_at.slice(0, 10)}</span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <Helmet>
        <title>Repositories - Adelodun1</title>
      </Helmet>
      <div className="repo-list"> {repoDisp}</div>
      <Outlet />
    </>
  );
}

export default RepoList;
