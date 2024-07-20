import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ThankYouPage from "./pages/ThankYou";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/success" exact element={<ThankYouPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
