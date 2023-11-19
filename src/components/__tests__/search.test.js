import { fireEvent, render,screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import Body from "../Body"
import MOCK_DATA from "../mocks/restaurantListMock.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
global.fetch =jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
});

it("Should render the Body component with search button",async()=>{
   await  act(async()=>render(
    <BrowserRouter>
     <Body/>
    </BrowserRouter>
  )
  );
const searchBtn =screen.getByRole("button",{name:"search"});

const search =screen.getByPlaceholderText("Search")
fireEvent.change(search,{target:{value:"Cafe Amudham"}})
fireEvent.click(searchBtn)
const cards= screen.getByTestId("resCard");
expect(cards.length).not.toBe(2)

expect(searchBtn).toBeInTheDocument();
   
  
});