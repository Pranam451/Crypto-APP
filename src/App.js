import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Coinpage from "./pages/Coinpage";
import Homepage from "./pages/Homepage";
import Searchpage from "./pages/Searchpage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<Coinpage />} />
          <Route path="/search" element={<Searchpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
