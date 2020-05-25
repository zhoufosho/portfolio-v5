import React from "react";
import Home from "./Home";
import Composer from "./Composer";
import { PrivatePage } from "./Components";

function Router() {
  const pathname = window.location.pathname;
  switch (pathname) {
    case "/composer":
      return <PrivatePage component={Composer} />
    default:
      return <Home />;
  }
}

function App() {
  return <Router />;
}

export default App;