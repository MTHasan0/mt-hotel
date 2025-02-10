import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import RoomDetails from './Pages/Room/RoomDetails.jsx';
import BookNow from './Pages/Booking/BookNow.jsx';
import Room from './Pages/Room/Rooms.jsx';
import Rooms from './Pages/Room/Rooms.jsx';
import Gallery from './Pages/Gallery/Gallery.jsx';
import Contact from './Pages/Contact/Contact.jsx';

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
        path: "/gallery",
        element: <Gallery></Gallery>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
