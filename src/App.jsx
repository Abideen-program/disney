import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [{ index: true, element: <Login /> }],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
