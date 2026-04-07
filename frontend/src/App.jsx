import { useState } from "react";
import ShopPage from "./Pages/ShopPage.jsx";
import SellPage from "./Pages/SellPage.jsx";
import UserPage from "./Pages/UserPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("shop");

  const renderPage = () => {
    switch (activePage) {
      case "shop": return <ShopPage />;
      case "sell": return <SellPage />;
      case "user": return <UserPage />;
      default: return <ShopPage />;
    }
  };

  return (
    <div className="app">
      <Header />
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}