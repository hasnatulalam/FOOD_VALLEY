import { useDispatch } from "react-redux";
import { ITEM_IMG_CDN } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList =({items})=>{
    const dispatch =useDispatch()
  const handleAddItem=(item)=>{
    //Dispatch an action
    dispatch(addItem(item));

  }
    return (
        <div >
          {items.map((item)=>(
           
            <div className="flex card w-6/12 mx-auto h-40 justify-between  items-center bg-blue-dark text-gray  px-10" key={item.card.info.id} >
            <div>
                <h3 className="font-bold">{item.card.info.name}</h3>
                <h3>{item.card.info.price/100}</h3>
            </div>
        <div>
        <img className="w-[118px] h-[96px] absolute"
          
          src={ITEM_IMG_CDN + item.card.info.imageId}
          alt={item?.name}
        />  
          <button className="bg-black text-white font-bold py-2 px-5 rounded shadow-lg my-12  absolute" onClick={()=>{handleAddItem(item)}}>Add +</button> 
        </div>
                
          </div>
          ))}
        </div>
    )
}
export default ItemList;