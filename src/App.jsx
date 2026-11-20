import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScrollTriggered from "./Component/ScrollTriggered";
import Login from "./Component/Login";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";

function MenuHome() {
  return (
    <div
      style={{
        backgroundColor: "#F5EFE6",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: 30,
          color: "#493326",
        }}
      >
        Our Delicious Menu 🍽️
      </h1>

      <ScrollTriggered />

      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <Link to="/login">
          <button style={buttonStyle}>Login / Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/Restaurant">
      <Routes>
        <Route path="/" element={<MenuHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

const buttonStyle = {
  backgroundColor: "#68432F",
  color: "#FFFAF4",
  border: "none",
  padding: "15px 40px",
  borderRadius: "30px",
  fontSize: "18px",
  cursor: "pointer",
};

export default App;
