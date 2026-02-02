import React from "react";

const inventory = [
  { label: "Rentals Completed", value: 112 },
  { label: "No. of Camera Units", value: 5 },
  { label: "No. of Accessories", value: 13 }
];

const recentRentals = [
  { unit: "00502", model: "m50 mark ii", renter: "G. Elvambueña", status: "Completed", balance: "Paid" },
  { unit: "01876", model: "Instax Link", renter: "R. Rellosa", status: "Completed", balance: "Paid" },
  { unit: "00325", model: "Eos 80D", renter: "C. Flores", status: "Completed", balance: "Paid" }
];

const transactions = [
  { date: "06/02/2025", name: "John Doe", model: "80D", addOns: "None", fee: "₱500.00", total: "₱500.00", days: 1 },
  { date: "06/02/2025", name: "Lorem Ipsum", model: "M50 Mark ii", addOns: "Tripod", fee: "₱700.00", total: "₱700.00", days: 1 },
  { date: "06/02/2025", name: "Jane Doe", model: "Mini 2 SE", addOns: "None", fee: "₱550.00", total: "₱550.00", days: 1 }
];

function Card({ children, title }) {
  return (
    <section className="card">
      {title && <h4 className="card-title">{title}</h4>}
      <div>{children}</div>
    </section>
  );
}

export default function Dashboard() {
  return (
    <div className="dashboard-grid">
      <div className="left-column">
        <Card title="Inventory Overview">
          <ul className="inventory-list">
            {inventory.map((i) => (
              <li key={i.label}>
                <div className="inv-value">{i.value}</div>
                <div className="inv-label">{i.label}</div>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Earnings">
          <div className="earnings">
            <small>For the last 30 Days</small>
            <div className="earn-number">₱14,850.00</div>
          </div>
        </Card>

        <Card title="Analytics Overview">
          <div className="analytics">
            <div className="legend">
              <div><span className="dot green-1" /> Canon M50 Mark II</div>
              <div><span className="dot green-2" /> Canon 80D</div>
              <div><span className="dot green-3" /> Canon M50 Mark I</div>
            </div>
            <div className="donut" />
          </div>
        </Card>
      </div>

      <div className="right-column">
        <div className="availability-card card">
          <h4>Equipment Availability</h4>
          <div className="availability-row">
            <select>
              <option>Unit</option>
              <option>Camera</option>
            </select>
            <input type="date" />
            <button className="btn primary">Check</button>
          </div>
        </div>

        <div className="card recent-rentals">
          <h4>Recent Rentals</h4>
          <div className="rentals-scroll">
            <table className="rentals-table">
              <thead>
                <tr>
                  <th>Unit No.</th>
                  <th>Model</th>
                  <th>Renter</th>
                  <th>Status</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {recentRentals.map((r, idx) => (
                  <tr key={idx}>
                    <td><span className="chip">{r.unit}</span></td>
                    <td>{r.model}</td>
                    <td>{r.renter}</td>
                    <td><span className={`status ${r.status === "Completed" ? "completed" : ""}`}></span> {r.status}</td>
                    <td>{r.balance} <button className="btn small">Details</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h4>Recent Transactions</h4>
          <div className="transactions-scroll">
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Date</th><th>Name</th><th>Camera Model</th><th>Add-Ons</th><th>Daily Rental Fee</th><th>Total Cost</th><th>Number of Days</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, i) => (
                  <tr key={i}>
                    <td>{t.date}</td><td>{t.name}</td><td>{t.model}</td><td>{t.addOns}</td><td>{t.fee}</td><td>{t.total}</td><td>{t.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
