import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemProvider } from "./context/ItemContex";
import Navigation from "./components/Navigation";
import ViewItems from "./pages/ViewItem";
import AddItems from "./pages/AddItem";

function App() {
  return (
    <ItemProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <Routes>
            <Route path="/" element={<ViewItems />} />
            <Route path="/add" element={<AddItems />} />
          </Routes>
        </div>
      </Router>
    </ItemProvider>
  );
}

export default App;
