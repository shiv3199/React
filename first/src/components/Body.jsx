import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filterRes, setFilterRes] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65441&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    setFilterRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return filterRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filter = filterRes.filter((res) => res.info.avgRating > 4.3);
            setFilterRes(filter);
          }}
        >
          Top Rated Restaruant
        </button>
      </div>
      <div className="res-container">
        {filterRes.map((x) => {
          return <RestaurantCard key={x.info.id} resData={x} />;
          //x is restaraunt which is present in array
        })}
      </div>
    </div>
  );
};
export default Body;
