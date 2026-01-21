import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({resData}) => {
  // const{resData}=props
  const{name, cuisines, avgRating,costForTwo,locality,sla:{deliveryTime}}=resData?.info
  return (
    <div className="border m-4 p-4 w-3xs bg-amber-200 rounded-2xl">
      <img
        className="res-img w-60 rounded-xs"
        src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
        alt="food"
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} Minutes</h4>
      <h4>{locality}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestaurantCard;