// import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <>
      <ExpenseForm />
      <br />
      <ExpenseFilter />
      <br />
      <ExpenseList />
    </>
  );
}

export default App;
