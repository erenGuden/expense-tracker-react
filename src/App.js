import "./App.css";
import { AddNewTransaction } from "./components/AddNewTransaction";
import { Balance } from "./components/Balance";
import { GlobalProvider} from  "./context/GlobalState";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";


function App() {
  return (
    <GlobalProvider className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
