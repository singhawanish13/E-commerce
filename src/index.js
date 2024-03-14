import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './Cart';
import DisplayProduct from './DisplayProduct';
import { SignUp } from './SignUp';
import { Login } from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path:"Cart",
      element:<Cart/>
    },
    {
      path:"Login",
      element:<Login />
    },
    {
      path:'SignUp',
      element: <SignUp />
    },
    {
      path : "displayproduct/:productID",
      element : <DisplayProduct  />
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
