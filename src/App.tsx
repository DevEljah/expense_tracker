// import "./App.css";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 1, category: "Food" },
    { id: 2, description: "Movie", amount: 4, category: "Entertainment" },
    { id: 3, description: "Notebook", amount: 2, category: "Utilties" },
    { id: 4, description: "Eggs", amount: 10, category: "Food" },
  ]);

  const handleDeleteExpense = (id: number) => {
    setExpenses(expenses.filter((ex) => ex.id !== id));
  };

  return (
    <>
      <ExpenseForm />
      <br />
      <ExpenseFilter />
      <br />
      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
    </>
  );
}

export default App;
