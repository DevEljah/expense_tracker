// import "./App.css";
import ExpensFilter from "./components/ExpensFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <>
      <ExpenseForm />
      <br />
      <ExpensFilter />
      <br />
      <ExpenseList />
    </>
  );
}

export default App;
