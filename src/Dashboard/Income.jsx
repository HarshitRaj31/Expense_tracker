import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Income =()=>{
  const [income, setIncome] = useState(() => {
    const savedIncome = localStorage.getItem("income");
    return savedIncome?JSON.parse(savedIncome):[];
  });
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  useEffect(() => {
    localStorage.setItem("income",JSON.stringify(income));
  },[income]);
  const addIncome =()=>{
    if (!source || !amount) {
  alert("No amount");
    return;
    }
    const newIncome = {
      id: Date.now(),
      source,
      amount: Number(amount),
    };
    setIncome((prev) => [...prev, newIncome]);
    setSource("");
    setAmount("");
  };
  const deleteIncome = useCallback((id) => {
    setIncome((prev) =>
      prev.filter((item)=>item.id!==id)
    );
  }, []);
  const totalIncome = useMemo(() => {
    return income.reduce(
      (sum, item) => sum+item.amount,
      0
    );
  }, [income]);
  return (
    <div className="container">
      <h1 className="heading">Income Tracker</h1>
      <div className="expense-card">
        <div className="form">
          <input
            placeholder="Income Source"
            value={source}
            onChange={(e) =>
              setSource(e.target.value)
            }
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
          />
          <button
            className="btn"
            onClick={addIncome}
          >
            Add Income
          </button>
        </div>
        <div className="total-card">
          <h2>Total ₹{totalIncome}</h2>
        </div>
        <div className="list">
          {income.length == 0?(
            <p className="empty">
              No income added
            </p>
          ) : ( income.map((item) => (
              <div
                className="item"
                key={item.id}
              >
                <div className="item-info">
                  <h3>{item.source}</h3>
                  <p>₹{item.amount}</p>
                </div>
                <button
                  className="delete"
                  onClick={() =>
                    deleteIncome(item.id)
                  }
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <Link to="/dashboard">
        <button className="btn">
          Back to Home
        </button>
      </Link>
    </div>
  );
};
export default Income;