import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const[filterRes, setFilterRes]= useState(resList)


  return (
    <div className="body">
      <div className="search">search</div>
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
         let filter = filterRes.filter((res)=>res.info.avgRating>4.5)
         setFilterRes(filter)
        }}>Top Rated Restaruant</button>
      </div>
      <div className="res-container">
        {
          filterRes.map((x)=>{
            return <RestaurantCard key={x.info.id} resData={x}/>
            //x is restaraunt which is present in array
          })
        }
      </div>
    </div>
  );
};
export default Body;