import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="app-root">
      <Sidebar />
      <main className="main-content">
        <Dashboard />
      </main>
    </div>
  );
}
