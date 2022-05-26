import {
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Bisnis from "./views/Bisnis/Bisnis";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Bisnis />} />
      </Routes>
    </div>
  );
}

export default App;
