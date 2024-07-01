import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store.js";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import Login from "./components/login/Login";
import Logen from "./pages/Logen.jsx";
import AddPost from "./pages/AddPost";
import Segnup from "./pages/Segnup";
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AllPosts from "./pages/AllPosts";

import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
         
            <Logen />
          
        ),
      },
      {
        path: "/signup",
        element: (
          
            <Segnup />
        ),
      },
      {
        path: "/all-posts",
        element: (
           
            <AllPosts />
         
        ),
      },
      {
        path: "/add-post",
        element: (
          
            <AddPost />
         
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
        
            <EditPost />
        
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
