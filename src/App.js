import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import Login from "./login/login";
import Join from "./join/Join";
import Smart from "./smart/Smart";
import Scanner from "./scanner/Scanner";
import { useState } from "react";
import Header from "./header/header";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Header login={login} setLogin={setLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login login={login} setLogin={setLogin} />}
          />
          <Route path="/join" element={<Join />} />
          <Route path="/smart" element={<Smart />} />
          <Route path="/scanner" element={<Scanner login={login}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
