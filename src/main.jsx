import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home/Home.jsx';
import RoomDetails from './Pages/Room/RoomDetails.jsx';
import BookNow from './Pages/Booking/BookNow.jsx';
import Rooms from './Pages/Room/Rooms.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import AboutUs from './Pages/AboutUs/AboutUs.jsx';
import Amenities from "./Pages/Amenities/Amenities.jsx";
import Spa from "./Pages/Spa/Spa.jsx";
import PrivatePool from "./Pages/PrivatePool/PrivatePool.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/room/:id",
        element: <RoomDetails></RoomDetails>
      },
      {
        path: "/booking/:id",
        element: <BookNow></BookNow>
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/amenities",
        element: <Amenities></Amenities>
      },
      {
        path: "/spa",
        element: <Spa></Spa>
      },
      {
        path: "/pool",
        element: <PrivatePool></PrivatePool>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
