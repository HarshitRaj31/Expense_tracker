import { Link } from "react-router-dom";
import "./Expense.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Homee() {
  const incomeData = JSON.parse(
    localStorage.getItem("income")||"[]"
  );
  const expenseData = JSON.parse(
    localStorage.getItem("expenses")||"[]"
  );
  const totalIncome = incomeData.reduce(
    (sum,item)=> sum+item.amount,
    0
  );
  const totalExpense = expenseData.reduce(
    (sum,item) =>sum+item.amount,
    0
  );
  const data = [
    {
      name: "Income",
      amount: totalIncome,
    },
    {
      name: "Expense",
      amount: totalExpense,
    },
  ];
  return (
    <div className="dashboard">
      <h1 className="heading">Dashboard</h1>
      <div className="card-container">
        <div className="dash-card">
          <h2>Income</h2>
          <p>Manage all your income</p>
          <Link to="/income">
            <button className="btn">
              Open Income
            </button>
          </Link>
        </div>
        <div className="dash-card">
          <h2>Expense</h2>
          <p>Track your expenses</p>
          <Link to="/expense">
            <button className="btn">
              Open Expense
            </button>
          </Link>
        </div>
      </div>

      <div className="summary-card">
        <h2>Financial Summary</h2>
        <p>Total Income: ₹{totalIncome}</p>
        <p>Total Expense: ₹{totalExpense}</p>
        <p>
          Balance: ₹{totalIncome - totalExpense}
        </p>
      </div>
      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Homee;