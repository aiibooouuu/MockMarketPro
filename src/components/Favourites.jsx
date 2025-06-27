import React, { useEffect, useState } from "react";
import "./Favourites.css";

function Favourites() {
const [favourites] = useState([
    { symbol: "AAPL", name: "Apple Inc." },
    { symbol: "GOOGL", name: "Alphabet Inc." }
]);
const [prices, setPrices] = useState({});

useEffect(() => {
    async function fetchPrices() {
    const updated = {};
    for (const fav of favourites) {
        const res = await fetch(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${fav.symbol}`);
        const data = await res.json();
        const stock = data.quoteResponse.result[0];
        updated[fav.symbol] = {
        price: stock?.regularMarketPrice ?? "N/A",
        prevClose: stock?.regularMarketPreviousClose ?? "N/A",
        change: stock?.regularMarketChange ?? 0,
        changePercent: stock?.regularMarketChangePercent ?? 0
        };
    }
    setPrices(updated);
    }
    fetchPrices();
}, [favourites]);

return (
    <div className="favourites-container">
    <h3 className="favourites-title">Favourites</h3>
    <ul className="favourites-list">
        {favourites.map(stock => {
        const info = prices[stock.symbol] || {};
        const isUp = info.change > 0;
        return (
            <li key={stock.symbol} className="favourites-item">
            <div className="fav-stock-main">
                <span className="fav-stock-name">{stock.name}</span>
                <span className="fav-stock-symbol">({stock.symbol})</span>
            </div>
            <div className="fav-stock-details">
                <span className="fav-stock-price">₹{info.price}</span>
                <span className="fav-stock-prev">Prev: ₹{info.prevClose}</span>
                <span className={`fav-stock-change ${isUp ? "up" : info.change < 0 ? "down" : ""}`}>
                {info.change > 0 ? "+" : ""}
                {info.change} ({info.changePercent > 0 ? "+" : ""}
                {info.changePercent}%)
                </span>
            </div>
            </li>
        );
        })}
    </ul>
    </div>
);
}

export default Favourites;