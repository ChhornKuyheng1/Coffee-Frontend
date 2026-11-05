import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import OwnerMain from "./pages/ower/OwnerMain";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/owner" element={<OwnerMain />}></Route>
    </Routes>
  );
}

export default App;
