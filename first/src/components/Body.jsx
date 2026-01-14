import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {
          resList.map((x)=>{
            return <RestaurantCard key={x.info.id} resData={x}/>
            //x is restaraunt which is present in array
          })
        }
      </div>
    </div>
  );
};
export default Body;