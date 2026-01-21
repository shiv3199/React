import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listRes, setListRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState('')
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65471&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    setFilterRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  return listRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-amber-100">
      <div className="filter mx-25">
      <div className="search m-3 inline-block">
      <input type="text" className="search-bar border ml-1 rounded-lg" value={searchText} onChange={(e)=>{
        setSearchText(e.target.value)
      }}/>
      <button className="ml-1 border rounded-lg px-3 bg-amber-400 font-bold cursor-pointer" onClick={()=>{
        const searchFilter = filterRes.filter((res)=>{
          return res.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setListRes(searchFilter);
      }}>Search</button>
      </div>
        <button
          className="filter-btn border rounded-lg px-3 font-bold bg-amber-200 cursor-pointer"
          onClick={() => {
            let filter = listRes.filter((res) => res.info.avgRating > 4.3);
            setListRes(filter);
          }}
        >
          Top Rated Restaruant
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {listRes.map((x) => {
          return <RestaurantCard key={x.info.id} resData={x} />;
          //x is restaraunt which is present in array
        })}
      </div>
    </div>
  );
};
export default Body;
