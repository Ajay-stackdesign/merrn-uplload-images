import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import GetAll from "./component/GetAll.js"
import UploadImages from "./component/UploadImages.js"
import Home from "./component/Home.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/get" element={<GetAll />} />
        <Route exact path="/upload" element={<UploadImages />} />
      </Routes>
    </Router>
  );
}

export default App;
