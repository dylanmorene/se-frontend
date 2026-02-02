import React from "react";

const MenuItem = ({ icon, label, active }) => (
  <div className={`menu-item ${active ? "active" : ""}`}>
    <span className="menu-icon">{icon}</span>
    <span>{label}</span>
  </div>
);

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">stillhouse</div>
      <div className="menu">
        <h6 className="menu-title">MAIN MENU</h6>
        <MenuItem icon="📊" label="Dashboard" active />
        <MenuItem icon="💳" label="Transactions" />
        <MenuItem icon="📷" label="Inventory" />
        <MenuItem icon="📈" label="Analytics" />
      </div>
    </aside>
  );
}
