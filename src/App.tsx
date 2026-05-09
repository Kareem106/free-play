import { createBrowserRouter, RouterProvider } from "react-router";
import SideBar from "./components/layout/SideBar";
import HomePage from "./components/pages/Home";
import NavBar from "./components/layout/NavBar";
import { gameService } from "./services/GameService";
import { useEffect } from "react";
import axios from "axios";
function App() {
  useEffect(() => {
    gameService
      .getAllGames()
      .then((games) => {
        console.log(games);
      })
      .catch((error) => {
        console.error("Failed to fetch games:", error);
      });
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/games");
        console.log("Fetched games via proxy:", response.data);
      } catch (error) {
        console.error("Error fetching games via proxy:", error);
      }
    };
    fetchData();
  }, []);
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
        <NavBar />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
