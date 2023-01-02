import { LoginPage } from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import UsersAll from "./pages/UsersAll/UsersAll";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import FreighsAll from "./pages/FreightsAll/FreighsAll";
import DetailsPageFreights from "./pages/DetailsPageFreights/DetailsPageFreights";
import GlobalStyle from "./globalStyles";
import { MapPage } from "./pages/MapPage/MapPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/users/all" element={<UsersAll />} />
        <Route path="users/all/user/:id" element={<DetailsPage />} />
        <Route path="/freights/update/:id" element={<DetailsPageFreights />} />
        <Route path="freights/all" element={<FreighsAll />} />
        <Route
          path="/freights/all/freight/:id"
          element={<DetailsPageFreights />}
        />
      </Routes>
    </Router>
  );
}

export default App;
