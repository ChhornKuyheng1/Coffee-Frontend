import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./index.css";
import OwnerMain from "./pages/ower/OwnerMain";
import Branch from "./pages/ower/Branch";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/owner" element={<OwnerMain />}>
        <Route path="branch" element={<Branch />} />
      </Route>
    </Routes>
  );
}

export default App;
