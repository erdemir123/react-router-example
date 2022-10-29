import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./componet/Nav";
import Footer from "./componet/Footer";
import About from "./pages/About";
import PrivateRouter from "./router/PrivateRouter";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<PrivateRouter />}>
        <Route path="" element={<About />} />
        </Route>
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
