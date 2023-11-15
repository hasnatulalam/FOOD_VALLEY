
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RES_IMG_CDN } from "../utils/constants";

const RestaurantMenu=()=>{
   const {resId} =useParams();
   const resInfo=useRestaurantMenu(resId) 
  if(resInfo===null) return <Shimmer/> ;

  const {name,cuisines,costForTwoMessage,avgRating,cloudinaryImageId}=resInfo?.cards[0]?.card?.card?.info;

    const {itemCards}=resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
     ||resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card;
    console.log(itemCards)
   
 

     return (
        <div className="menu">
          <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img className="restaurant-img" src={ RES_IMG_CDN  + cloudinaryImageId } alt={name}/>
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{name}</h2>
          <p className="restaurant-tags">{cuisines.join(", ")}</p>
          <div className="restaurant-details">
            <div className="restaurant-rating">
              <span>{avgRating}</span>
            </div>
            <div>|</div>
            
            <div>|</div>
            <div>{costForTwoMessage}</div>
          </div>
          </div>
          </div>
          </div>

       <h2>Menu</h2>
         <ul>
         {itemCards.map((item)=>(
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
         ))}
         
         </ul>
        
        </div>
    );
};
export default RestaurantMenu;