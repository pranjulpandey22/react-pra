import React, { Children } from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement('h1',{id:'head',xyz:"heading"},'hello react from local system for config')
import Body from "./Components/Body";
import Headers from "./Components/Headers";
import ContactUs from "./Components/ContactUs";
import Aboutus from "./Components/AboutUs";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestraduntList from "./Components/RestraduntList";

const App = () => {
  return (
    <div>
      <Headers />
      <Outlet />
    </div>
  );
};
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
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/restradunt/:resID",
        element: <RestraduntList />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
