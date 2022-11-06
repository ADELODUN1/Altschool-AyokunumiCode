import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [gitProfile, setGitProfile] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      let data = await fetch("https://api.github.com/users/adelodun1");
      data = await data.json();
      setGitProfile(data);
    })();
  }, []);

  return (
    <div className="home">
      <Helmet>
        <title>Home - Adelodun1</title>
      </Helmet>
      <div>
        <img src={gitProfile.avatar_url} className="avatar" alt="avatar" />
        <div className="login">{gitProfile.login}</div>
      </div>
      <div>
        <div className="name">{gitProfile.name}</div>
        <div className="bio">{gitProfile.bio}</div>
      </div>
      <Link to="/repos">View Repositories</Link>
      <Link to="/testerror">Test Error Boundary</Link>
    </div>
  );
}

export default Home;
