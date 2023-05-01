import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/Login/Login";

const App = () => {

  const router = createBrowserRouter([{ path: "/", element: <Login /> }]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
