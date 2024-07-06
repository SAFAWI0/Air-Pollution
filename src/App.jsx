import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "./Screens/HomeScreen/homeScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
