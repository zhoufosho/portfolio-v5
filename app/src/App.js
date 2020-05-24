import React from "react";
import Home from "./Home";

function Router() {
  const pathname = window.location.pathname;
  switch (pathname) {
    default:
      return <Home />;
  }
}

function App() {
  return <Router />;
}

export default App;