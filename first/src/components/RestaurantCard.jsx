import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({resData}) => {
  // const{resData}=props
  const{name, cuisines, avgRating,costForTwo,locality,sla:{deliveryTime}}=resData?.info
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
        alt="food"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} Minutes</h4>
      <h4>{locality}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestaurantCard;