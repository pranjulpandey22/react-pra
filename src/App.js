import React, { lazy,Suspense ,useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement('h1',{id:'head',xyz:"heading"},'hello react from local system for config')
import Body from "./Components/Body";
import Headers from "./Components/Headers";
// import ContactUs from "./Components/ContactUs";
// import Aboutus from "./Components/AboutUs";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestraduntList from "./Components/RestraduntList";
import Simmer from './Components/Simmer'
import UserContext from './utilis/UserContext'
// import Cart from './Components/Cart'
import {Provider} from 'react-redux';
import Store from './utilis/Store'

const App = () => {
  const[lastname,setName] = useState()
  useEffect(() => {
    setName('Pandey')
  },[])
  return (
    <>
      <Provider store={Store}>
      <UserContext.Provider  value = {{name:lastname}} >
      <Headers />
      <Outlet />
      </UserContext.Provider>
      </Provider>
    </>
   
  );
};
const ContactUs = lazy(()=>import("./Components/ContactUs"));
const AboutUs = lazy(()=>import('./Components/AboutUs'));
const Cart = lazy(()=>import('./Components/Cart') )
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Suspense fallback={<h1>Loading....</h1>}> <ContactUs /></Suspense> 
        // element:<ContactUs />
      },
      {
        path: "/about",
        element: <Suspense fallback={<Simmer />} ><AboutUs /> </Suspense> ,
      },
      {
        path: "/restradunt/:resID",
        element: <RestraduntList />,
      },
      {
        path: "/cart",
        element:<Suspense fallback = {<h2>Loading will take time..</h2>}> <Cart /> </Suspense>
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
