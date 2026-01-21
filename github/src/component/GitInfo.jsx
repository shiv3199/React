import { useEffect, useState } from "react";

const GitInfo = ({ searchText }) => {
  const [info, setInfo] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    if (!searchText) return;
    fetchData();
  }, [searchText]);

  const fetchData = async () => {
    try {
      const data = await fetch(`https://api.github.com/users/${searchText}`);
      if (!data.ok) throw new Error("User not found");
      const json = await data.json();
      setInfo(json);
      setError("");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  const { name, followers, location, avatar_url, public_repos, html_url } =
    info;
  if (error) {
    return <h1 className="font-bold text-red-700 text-2xl text-center">{error}</h1>;
  }
  return (
    <>
      <div className="flex justify-center">
        <div className=" w-100 p-3 rounded-2xl shadow-2xl">
          <div className="flex justify-center p-2">
          <img className="w-40 rounded-2xl" src={avatar_url} alt="photo" />
          </div>
          <h2>Name: {name}</h2>
          <h3>Followers: {followers}</h3>
          <h3>Location: {location}</h3>
          <h3>Repo: {public_repos}</h3>
          <h3>
            <a className=" cursor-pointer" href={html_url} target="blank">
              Full Profile
            </a>
          </h3>
        </div>
      </div>
    </>
  );
};
export default GitInfo;
