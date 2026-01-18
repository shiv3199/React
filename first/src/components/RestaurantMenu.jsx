import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try{
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=804071&catalog_qa=undefined&submitAction=ENTER",
    );
    const data = await response.json();
  }catch(err){
    console.log("sorry "+err)

  }
}
  ;
  return (
    <div className="restaurant-menu">
      <h1>Name</h1>
      <h2>Menu</h2>
      <ul>
        <li>burger</li>
        <li>Fries</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
