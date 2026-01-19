import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact.jsx";
import Body from "./components/Body.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { lazy,Suspense } from "react";

const Grocery = lazy(()=>{
  return import('./components/Grocery.jsx')
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/restaurant/:resId", 
        element: <RestaurantMenu /> 
      },
      { path: "/grocery", 
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /> </Suspense>
      }
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
