
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RES_IMG_CDN } from "../utils/constants";
import { AiFillStar } from "react-icons/ai";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
   const { resId } = useParams();
   const resInfo = useRestaurantMenu(resId)
   if (resInfo === null) return <Shimmer />;

   const { name, cuisines, deliveryTime, sla, totalRatingsString, areaName,
      feeDetails,message , costForTwoMessage, avgRating, cloudinaryImageId, lastMileTravelString } = resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

   


   const categories = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
      (c => c.card.card?.["@type"] ===
         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
   



   return (
      <div className="flex justify-center sm:flex-col xsm:flex-col mob:flex-col">
         <div className="card flex basis-full h-60 justify-evenly items-center bg-blue-dark text-gray p-8">
            <div className="card">
               <h3 className="text-3xl max-w-[538px] font-semibold py-2">{name}</h3>
               <p className="overflow-hidden whitespace-nowrap text-[15px] max-w-[538px]">{cuisines.join(",")}</p>
               <div className="flex items-center px-1 pb-2 gap-1">
               <p >{areaName},</p>
               <p>{sla.lastMileTravelString}</p>
               </div>
              
               <div className="flex items-center px-1 py-0 gap-1">
          <span>{feeDetails.message}</span>
          </div>
          
         </div>
         <div className="items-center px-1 py-0"> 
               <div className="flex items-center px-1 py-0 gap-1">
                  <AiFillStar />
                  <p>{avgRating}</p>
               </div>


               <span>{totalRatingsString}</span>
            </div>
         </div>

          {categories.map((category,index)=>(
               <RestaurantCategory key={index}  data={category?.card.card}/>
                     ))}

      </div>
   );
};
export default RestaurantMenu;