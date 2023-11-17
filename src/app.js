import React, {useState, useEffect,Suspense } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

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
    <UserContext.Provider value={{loggedInUser:userInfo}}>
      <div className="app">
     <Header/>
    <Outlet/>
   
     
    </div>
    </UserContext.Provider>
    
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
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
    ],
    errorElement:<Error/>
  },
 

])

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)