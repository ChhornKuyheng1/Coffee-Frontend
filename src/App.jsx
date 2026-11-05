import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import OwnerMain from "./pages/ower/OwnerMain";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route index element={<OwnerMain />}></Route>
    </Routes>
  );
}

export default App;
