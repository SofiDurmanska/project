import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Location from "./pages/Location";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="location" element={<Location />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
