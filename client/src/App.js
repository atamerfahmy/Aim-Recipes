import { Box } from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TopBar from "./components/TopBar";
import AddRecipe from "./pages/AddRecipe";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <Box sx={{
      overflowX: 'hidden'
    }}>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/add_recipe" element={<AddRecipe />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
