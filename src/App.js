import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import ForDisplay from "./components/ForDisplay";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/newpage" element={<ForDisplay />} />
    </Routes>
  );
}

export default App;
