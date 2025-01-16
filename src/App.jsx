import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CalculateIncomeExpenseBalance from "./CalculateIncomeExpenseBalance";
import EntryExpenseIncome from "./EntryExpenseIncome";
import TrackExpense from "./TrackExpense";
import TrackIncome from "./TrackIncome";

function App() {
  const initialIncome = {
    id: crypto.randomUUID(),
    category: "Salary",
    amount: 10000,
    date: "2025-01-23",
  };

  const initialExpense = {
    id: crypto.randomUUID(),
    category: "Food",
    amount: 9000,
    date: "2025-02-15",
  };

  const [incomes, setIncomes] = useState([initialIncome]);
  const [expenses, setExpenses] = useState([initialExpense]);

  const [isIncome, setIsIncome] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [editIncome, setEditIncome] = useState(null);

  // Add income or expense through Income entry form
  function handleIncomeOrExpense(newIncomeOrExpense) {
    if (isIncome) {
      if (!isEdit) {
        setIncomes([...incomes, newIncomeOrExpense]);
        toast.success("Income Added!");
      } else {
        setIncomes(
          incomes.map((income) => {
            if (income.id === newIncomeOrExpense.id) {
              return newIncomeOrExpense;
            }
            return income;
          })
        );
        setIsEdit(false);
        toast.success("Income Updated!");
      }
    } else {
      setExpenses([...expenses, newIncomeOrExpense]);
    }
  }

  //Handle edit Income
  function handleEditIncome(valueToBeEdited) {
    setIsIncome(true)
    setIsEdit(true);
    setEditIncome(valueToBeEdited);
  }

  // console.log(isIncome);

  return (
    <div className="font-chakra max-w-[1290px] mx-auto flex flex-col items-start px-0 md:px-5 md:flex-row gap-10 py-0 md:py-10">
      <div className="w-full md:w-1/3 p-5 text-white border rounded-md dark:border-gray-600">
        <EntryExpenseIncome
          onAddIncomeOrExpense={handleIncomeOrExpense}
          onHandleIsIncome={setIsIncome}
          isIncome={isIncome}
          editIncome={editIncome}
          isEdit={isEdit}
        ></EntryExpenseIncome>
      </div>

      <div className="w-full md:w-2/3 text-white space-y-10 md:space-y-5">
        <CalculateIncomeExpenseBalance
          incomes={incomes}
          expenses={expenses}
        ></CalculateIncomeExpenseBalance>

        <div className="flex items-start space-x-0 md:space-x-5 space-y-3 md:space-y-0 flex-col md:flex-row">
          <div className="flex-1 w-full md:w-1/2 border rounded-md dark:border-gray-600">
            <TrackIncome
              incomes={incomes}
              onEditIncome={handleEditIncome}
            ></TrackIncome>
          </div>
          <div className="flex-1 w-full md:w-1/2 border rounded-md dark:border-gray-600">
            <TrackExpense expenses={expenses}></TrackExpense>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
