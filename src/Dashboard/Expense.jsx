import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import "./Expense.css";
const Expense = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  const addExpense = () => {
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
    };
    setExpenses((prev) => [
      ...prev,
      newExpense,
    ]);
    setTitle("");
    setAmount("");
  };
  const deleteExpense = useCallback((id) => {
    setExpenses((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }, []);
  const totalExpense = useMemo(() => {
    return expenses.reduce(
      (sum, item) => sum + item.amount,
      0
    );
  }, [expenses]);
  return (
    <div className="container">
      <h1 className="heading">
        Expense Tracker
      </h1>
      <div className="expense-card">
        <div className="form">
          <input
            type="text"
            placeholder="Expense Name"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
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
            onClick={addExpense}
          >
            Add Expense
          </button>
        </div>

        <div className="total-card">
          <h2>Total ₹{totalExpense}</h2>
        </div>

        <div className="list">
          {expenses.length === 0 ? (
            <p className="empty">
              No expense added
            </p>
          ) : (
            expenses.map((item) => (
              <div
                className="item"
                key={item.id}
              >
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>₹{item.amount}</p>
                </div>

                <button
                  className="delete"
                  onClick={() =>
                    deleteExpense(item.id)
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

export default Expense;