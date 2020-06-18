import React from "react";
import Home from "./Home";
import Composer from "./Composer";
import Spaces from "./Spaces";
import Dogfooding from "./Dogfooding";
import { PrivatePage } from "./Components";

function Router() {
  const pathname = window.location.pathname;
  switch (pathname) {
    case "/composer":
      return <PrivatePage component={Composer} />
    case "/spaces":
      return <PrivatePage component={Spaces} />
    case "/dogfooding":
      return <Dogfooding />
    default:
      return <Home />;
  }
}

function App() {
  return <Router />;
}

export default App;