import React, { useState } from "react";
import FooterPrimary from "./components/footers/FooterPrimary";
import NavbarPrimary from "./components/navbars/NavbarPrimary";

import Paths from "./Paths";
export const Sidebar = React.createContext();

function App() {
  const [sidebar, setShowSidebar] = useState(true);

  return (
    <Sidebar.Provider value={{ sidebar, setShowSidebar }}>
      <main className="min-vh-100 d-flex flex-column">
        <NavbarPrimary />
        <div className="flex-fill">
          <Paths />
        </div>
        <FooterPrimary />
      </main>
    </Sidebar.Provider>
  );
}

export default App;
