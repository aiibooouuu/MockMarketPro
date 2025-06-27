import React from "react";
import "./BankCard.css";

function BankCard() {
  return (
    <div className="bank-card">
      <div className="bank-card-title">Bank Balance</div>
      <div className="bank-card-amount">₹1,00,000</div>
      <div className="bank-card-row">
        <span>Profit:</span>
        <span className="profit">₹0</span>
      </div>
      <div className="bank-card-row">
        <span>Loss:</span>
        <span className="loss">₹0</span>
      </div>
    </div>
  );
}

export default BankCard;