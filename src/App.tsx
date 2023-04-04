// import "./App.css";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
export interface ExpenseProps {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [expenses, setExpenses] = useState<ExpenseProps[]>([
    { id: 1, description: "Milk", amount: 1, category: "Food" },
    { id: 2, description: "Movie", amount: 4, category: "Entertainment" },
    { id: 3, description: "Notebook", amount: 2, category: "Utilities" },
    { id: 4, description: "Eggs", amount: 10, category: "Food" },
  ]);

  const [selectedGategory, setSelectedGategory] = useState("");

  const visibleExpenses = selectedGategory
    ? expenses.filter((exp) => exp.category === selectedGategory)
    : expenses;

  const handleAddExpense = (newExpense: Omit<ExpenseProps, "id">) => {
    const expenseWithId = { ...newExpense, id: expenses.length + 1 };
    setExpenses([...expenses, expenseWithId]);
  };

  const handleDeleteExpense = (id: number) => {
    setExpenses(expenses.filter((ex) => ex.id !== id));
  };

  return (
    <>
      <ExpenseForm onSubmit={handleAddExpense} />
      <br />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedGategory(category)}
      />
      <br />
      <ExpenseList expenses={visibleExpenses} onDelete={handleDeleteExpense} />
    </>
  );
}

export default App;
