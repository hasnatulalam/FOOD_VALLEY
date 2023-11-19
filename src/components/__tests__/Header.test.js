import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"


describe("Header page test case",()=>{
    test("Should render Header component a with login button ",()=>{
         render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
            </BrowserRouter>
           
        
         )
      const loginButton =screen.getByRole("button",{name:"Login"});
    // const loginButton =screen.getByText("Login")
      expect(loginButton).toBeInTheDocument()
    })
    test("Should render Header component a with cart items 0 ",()=>{
        render(
           <BrowserRouter>
           <Provider store={appStore}>
           <Header/>
           </Provider>
           </BrowserRouter>
          
       
        )
     const cartItems =screen.getByText(/Cart/);
     expect(cartItems).toBeInTheDocument()
   })
   test("Should change Login button to Logout onclick ",()=>{
      render(
         <BrowserRouter>
         <Provider store={appStore}>
         <Header/>
         </Provider>
         </BrowserRouter>
        
     
      )
   const loginButton =screen.getByRole("button",{name:"Login"});
   fireEvent.click(loginButton)
   const logoutButton =screen.getByRole("button",{name:"Logout"});
   expect(logoutButton).toBeInTheDocument()
 })
})