import { ITEM_IMG_CDN } from "../utils/constants";
const ItemList =({items})=>{
    
    return (
        <div >
          {items.map((item)=>(
           
            <div className="card w-6/12 mx-auto h-40 justify-between items-center bg-blue-dark text-gray  px-10" key={item.card.info.id} >
            <div>
                <h3 className="font-bold">{item.card.info.name}</h3>
                <h3>{item.card.info.price}</h3>
            </div>
               <div>
               
               </div>
                
          </div>
          ))}
        </div>
    )
}
export default ItemList;