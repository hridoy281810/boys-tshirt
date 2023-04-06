import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import OrderReview from './components/OrderReview/OrderReview';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main />,
    children: [
      {
      path:'/',
      element:<Home />
      },
      {
       path:'review',
       element: <OrderReview />,
       loader: ()=> fetch(`tshirt.json`)
       
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)