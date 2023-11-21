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


const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "search" });

  const searchInput = screen.getByPlaceholderText("Search");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});
it("Should filter Top Rated Restaurant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
  
    expect(cardsBeforeFilter.length).toBe(9);
  
    const topRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurant",
    });
    fireEvent.click(topRatedBtn);
  
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(9);
  });
   
  
