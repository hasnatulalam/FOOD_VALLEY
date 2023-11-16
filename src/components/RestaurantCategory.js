import { RES_ITEM_CATEGORY_URL } from "../utils/constants";
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
const RestaurantCategory=({data})=>{
    const [isVisible, setIsVisible] = useState(true);
    console.log(data)
    const toggleView = () => {
        setIsVisible(!isVisible);
      };
  
    return (
     
        <div className="w-6/12 card mx-auto my-4 justify-between flex items-center bg-blue-dark text-gray px-10">
           <div>
           <h3 className="font-bold text-lg cursor-pointer px-2" onClick={toggleView}>
            {data.title} ({data.itemCards.length})
          </h3> 
           </div>
           <div>
           {isVisible ? (
            <SlArrowUp onClick={toggleView} className="cursor-pointer"/>
          ) : (
            <SlArrowDown onClick={toggleView} className="cursor-pointer" />
          )}
            </div>               
         
        </div>
    )
}
export default RestaurantCategory;