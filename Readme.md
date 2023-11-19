setting up project
npm init

\**
\*\* Header
*Logo
\*Nav links
\*\* Body

- search
  *Restaurant Container
  *Restaurant Card ->Img,->Name of res,->star rating,->cuisine,->delivery time etc
  ** Footer
  *copyright
  *link
  *address
  *Contact
  **

  ResMenuApi="https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=61785&submitAction=ENTER"

  res="https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999"

  class component
  /\*
  parent constructor
  -Parent render
  -First Child constructor
  -First Child render

  -Second Child constructor
  -Second Child render
  <DOM Updated in Single Batch>
  First Child componentDid mount
  Second Child componentDid mount
  parent componentDid mount

  parent ComponentDid mount

  -

\*/

### Redux Toolkit

-Install @reduxjs/toolkit and react-redux
-Build Our Store
-Connect our store to our app
-Create a slice(cartSlice)
-dispatch (action)
-selector

/_ Vanilla(order)=>Redux Don't Mutate state return is mandatory
const newState=[...state];
newState. state.items.push(action.payload);
return newState; _/

types of testing(developer)
Unit testing
integration testing
End to end testing e2e testing(papitier,selinium tool)

//Setting testing in our project
install React testing library
install jest
install babel dependencies;
Configure babel
configure parcel config file to disable default babel transpilation
install npx jest --init
install jsdom library
install npm install --save-dev @babel/preset-react to make JSX work in test cases
npm install -D @testing-library/jest-dom
