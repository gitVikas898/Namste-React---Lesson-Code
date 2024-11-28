import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.jsx";
import { BodyComponent } from "./components/BodyComponent.jsx";
import { FooterComponent } from "./components/FooterComponent.jsx";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Cart } from "./components/Cart.jsx";
import { Error } from "./components/Error.jsx";
import { Menu } from "./components/Menu.jsx";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
      <FooterComponent></FooterComponent>
    </div>
  );
};

const appRouter = createBrowserRouter([
  //list of paths
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <BodyComponent></BodyComponent>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/restaurants/:resId",
        element: <Menu></Menu>,
      },
    ],

    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
