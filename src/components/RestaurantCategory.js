import { RES_ITEM_CATEGORY_URL } from "../utils/constants";
import ItemList from "./ItemList";
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
const RestaurantCategory=({data})=>{
    const [isVisible, setIsVisible] = useState(true);
    //console.log(data)
    const toggleView = () => {
        setIsVisible(!isVisible);
      };
  
    return (
        
      <div className="py-5">
            <div className="w-6/12 card mx-auto my-4 justify-between flex items-center bg-blue-dark text-gray px-10">
           <h3 className="font-bold text-lg cursor-pointer px-2" onClick={toggleView}>
            {data?.title} ({data?.itemCards?.length})
          </h3> 
          
           {isVisible ? (
            <SlArrowUp onClick={toggleView} className="cursor-pointer"/>
          ) : (
            <SlArrowDown onClick={toggleView} className="cursor-pointer" />
          )}
               
        </div>
    {isVisible && (
         <div className="flex flex-col justify-evenly" >
         <ItemList  items={data?.itemCards}/> 
       </div>
        )}
        
    </div>               
      
        
     
     
       
                       
         
        
    )
}
export default RestaurantCategory;