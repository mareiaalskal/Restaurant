import React, { useState } from "react";
import ScrollTriggered from "./Component/ScrollTriggered";
import Login from "./Component/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? (
        <Login />
      ) : (
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
            <button
              onClick={() => setShowLogin(true)}
              style={{
                backgroundColor: "#68432F",
                color: "#FFFAF4",
                border: "none",
                padding: "15px 40px",
                borderRadius: "30px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Login / Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
