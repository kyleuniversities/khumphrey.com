import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClosedHomePage } from "./app/home/ClosedHomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ClosedHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
