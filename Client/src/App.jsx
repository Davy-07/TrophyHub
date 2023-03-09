import "./styles/App.css";
import { useState } from "react";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Homepage } from "./pages/homepage";
import { CheckAuth } from "./utlis/CheckAuth";
import { Verfication } from "./pages/Verfication";
import { Test } from "./pages/test";

import {
  RouterProvider,
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    { path: "/", element: <CheckAuth /> },
    {
      path: "/sign-up",
      element: <Signup />,
    },
    {
      path: "/log-in",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Homepage />,
    },
    {
      path: "/verification",
      element: <Verfication />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
