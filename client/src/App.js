import { Routes, Route} from "react-router-dom";
import { Home, Login, Register } from "./pages";

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={<h3 style={{ textAlign: "center" }}>404 NOT FOUND</h3>}
      />
    </Routes>
  );
}

export default App;
