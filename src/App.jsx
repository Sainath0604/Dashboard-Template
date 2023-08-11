import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BalanceGraph from "./components/BalanceGraph";
import UserGraph from "./components/UserGraph";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/balanceGraph" element={<BalanceGraph />} />
          <Route path="/userGraph" element={<UserGraph />} />
        </Routes>
      </Router>
    </div>
  );
}
