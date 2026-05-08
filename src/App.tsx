import { createBrowserRouter, RouterProvider } from "react-router";
import SideBar from "./components/layout/SideBar";
import HomePage from "./components/pages/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
