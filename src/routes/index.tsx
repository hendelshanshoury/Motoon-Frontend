import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Classes from "./../pages/Classes";
import Contact from "./../pages/Contact";
import Support from "./../pages/Support";
import Register from "./../pages/Register";
import Login from "./../pages/Login";
import NotFound from "./../pages/NotFound";
import AuthLayout from "../layouts/AuthLayout";

let routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "classes", element: <Login /> },
      { path: "contact", element: <Contact /> },
      { path: "support", element: <Support /> },

      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);
function index() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default index;
