import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import SelfNavbar from "../components/SelfNavbar";
import Sidebar from "../components/Sidebar";
import "./ViewStocks.css";

function ViewStocks() {
const [symbols, setSymbols] = useState([]);
const [search, setSearch] = useState("");
const [selected, setSelected] = useState(null);
const [history, setHistory] = useState([]);
const [latestPrices, setLatestPrices] = useState({});

useEffect(() => {
    fetch("http://localhost:5000/api/stocks")
    .then(res => res.json())
    .then(setSymbols);
}, []);

// Fetch latest price for all stocks (latest row in each CSV)
useEffect(() => {
    async function fetchLatest() {
    const prices = {};
    for (const symbol of symbols) {
        const res = await fetch(`http://localhost:5000/api/stocks/${symbol}`);
        const data = await res.json();
        if (data.length > 0) {
        const latest = data[data.length - 1];
        prices[symbol] = latest.Close;
        }
    }
    setLatestPrices(prices);
    }
    if (symbols.length) fetchLatest();
}, [symbols]);

const handleSelect = (symbol) => {
    setSelected(symbol);
    fetch(`http://localhost:5000/api/stocks/${symbol}`)
    .then(res => res.json())
    .then(setHistory);
};

// Prepare chart data
const chartData = {
    labels: history.map(row => row.Date),
    datasets: [
    {
        label: "Close Price",
        data: history.map(row => parseFloat(row.Close)),
        fill: false,
        borderColor: "#2d7cf6",
        tension: 0.1,
    },
    ],
};

return (
    <div className="viewstocks-root">
    <SelfNavbar />
    <div className="viewstocks-main">
        <Sidebar />
        <div className="viewstocks-content">
        <h2>View Stocks</h2>
        <input
            type="text"
            placeholder="Search by symbol"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="stock-search"
        />
        <table className="stock-table">
            <thead>
            <tr>
                <th>Stock Symbol</th>
                <th>Latest Price</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {symbols
                .filter(s => s.symbol.toLowerCase().includes(search.toLowerCase()) || s.name.toLowerCase().includes(search.toLowerCase()))
                .slice(0, 50)
                .map(stock => (
                <tr key={stock.symbol}>
                    <td>{stock.name} <span style={{color:'#7a869a'}}>({stock.symbol})</span></td>
                    <td>{latestPrices[stock.symbol] ? `₹${latestPrices[stock.symbol]}` : "Loading..."}</td>
                    <td>
                    <button
                        className="view-graph-btn"
                        onClick={() => handleSelect(stock.symbol)}
                        style={{
                        background: stock.symbol === selected ? "#2d7cf6" : "#232b3e",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        padding: "0.4rem 1rem",
                        cursor: "pointer"
                        }}
                    >
                        View Graph
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        {history.length > 0 && (
            <div className="stock-chart">
            <h3>{selected} Growth Chart</h3>
            <Line data={chartData} />
            </div>
        )}
        </div>
    </div>
    </div>
);
}

export default ViewStocks;