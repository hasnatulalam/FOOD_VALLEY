import React, {useState, useEffect,Suspense } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Grocery from "./components/Grocery.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

const AppLayout=()=>{
  const [userInfo,setUserInfo]=useState();

 //authentication
  useEffect(()=>{
   //make an api call send userName and password
   const data={
      name:"Hasib",
   }
   setUserInfo(data?.name)
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
      <div className="app">
     <Header/>
    <Outlet/> 
    </div>
    </UserContext.Provider>
    </Provider>
    
  )
}
const appRouter =createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        )
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      
    ],
    errorElement:<Error/>
  },
 

])

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)