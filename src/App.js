import "./App.css";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddNewTransaction } from "./components/AddNewTransaction";
import { GlobalProvider} from  "./context/GlobalState";


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
