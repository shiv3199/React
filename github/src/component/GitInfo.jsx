import { use, useEffect, useState } from "react";
import Search from "./Search";
const GitInfo = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/vikasthakurr");
    const json = await data.json();
    setInfo(json);
  };
  const { name, followers, location, avatar_url, public_repos } = info;
  return (
    <>
      <Search />
      <div className="git-info">
        <img src={avatar_url} alt="photo" />
        <h2>Name: {name}</h2>
        <h3>Followers: {followers}</h3>
        <h3>Location: {location}</h3>
        <h3>Repo: {public_repos}</h3>
      </div>
    </>
  );
};
export default GitInfo;
