
import { act } from "react-dom/test-utils"
import "@testing-library/jest-dom"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/restaurantMenuMock.json"
import { fireEvent, render,screen } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import RestaurantCategory from "../RestaurantCategory"
import Header from "../Header"
import ItemList from "../ItemList"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart"
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA)
    })
})

it("should load restaurant menu component",async()=>{
   await act(async ()=> render (
    <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        <Cart/>
      <RestaurantMenu/>
     </Provider>
    </BrowserRouter>
  
     
   

   ));
   
//const accoundian =screen.getByText("Butter Paneer Biryani Family Pack (serves 3-4)")
const accoundian =screen.getByText("Authentic Andhra Meals (6)")
fireEvent.click(accoundian)
expect(screen.getAllByTestId("foodItems").length).toBe(50);
const addBtns = screen.getAllByRole("button", { name: "Add +" });
fireEvent.click(addBtns[0])

expect(screen.getByText("Cart(1)")).toBeInTheDocument();
fireEvent.click(addBtns[1]);

expect(screen.getByText("Cart(2)")).toBeInTheDocument();
expect(screen.getAllByTestId("foodItems").length).toBe(52);
fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
expect(screen.getAllByTestId("foodItems").length).toBe(50);
expect(
    screen.getByText("Your Cart is Empty pls add some items to the cart!")
  ).toBeInTheDocument();




   
  
 
 });