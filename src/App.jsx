import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
