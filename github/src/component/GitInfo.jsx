import { useEffect, useState } from "react";

const GitInfo = ({ searchText }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (!searchText) return;
    fetchData();
  }, [searchText]);

  const fetchData = async () => {
    try{
    const data = await fetch(`https://api.github.com/users/${searchText}`);
    if(!data.ok) throw new Error ('user not found')
    const json = await data.json();
    setInfo(json);
    }catch(error){

    }
  };
  const { name, followers, location, avatar_url, public_repos } = info;
  return (
    <>
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
