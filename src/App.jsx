import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/" element={<Game />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
