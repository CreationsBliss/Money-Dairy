import { useEffect, useState } from "react";
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
  const [isExpenseEdit, setIsExpenseEdit] = useState(false);
  const [editIncome, setEditIncome] = useState(null);
  const [editExpense, setEditExpense] = useState(null);

  const [filteredIncomes, setFilteredIncomes] = useState(incomes);
  const [selectedCategories, setSelectedCategories] = useState([]);

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
      if (!isExpenseEdit) {
        setExpenses([...expenses, newIncomeOrExpense]);
        toast.success("Expense Added!");
      } else {
        setExpenses(
          expenses.map((expense) => {
            if (expense.id === newIncomeOrExpense.id) {
              return newIncomeOrExpense;
            }
            return expense;
          })
        );
        // setIsEdit(false);
        setIsExpenseEdit(false);
        toast.success("Expense Updated!");
      }
    }
  }

  //Handle edit Income
  function handleEditIncome(incomeToBeEdited) {
    setIsIncome(true);
    setIsEdit(true);
    setEditIncome(incomeToBeEdited);
  }

  //Handle delete Income
  function handleDeleteIncome(incomeToBeDeleted) {
    const newIcomes = incomes.filter(
      (income) => income.id !== incomeToBeDeleted.id
    );
    setIncomes(newIcomes);
  }

  //Handle edit Expense
  function handleEditExpense(expenseToBeEdited) {
    setIsIncome(false);
    setIsExpenseEdit(true);
    setEditExpense(expenseToBeEdited);
  }

  //Handle delete Expense
  function handleDeleteExpense(expenseToBeDeleted) {
    const newExpenses = expenses.filter(
      (expense) => expense.id !== expenseToBeDeleted.id
    );
    setExpenses(newExpenses);
  }

  // Sort Income by Ascending order
  function handleSortAscendingIncome() {
    const sorted = [...incomes].sort((a, b) => a.amount - b.amount);
    setIncomes(sorted);
  }

  // Sort Income by Descending order
  const handleSortDescendingIncome = () => {
    const sorted = [...incomes].sort((a, b) => b.amount - a.amount);
    setIncomes(sorted);
  };

  // Filter Income by Checkbox value
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredIncomes(incomes);
    } else {
      const newFilteredIncomes = incomes.filter((income) =>
        selectedCategories.includes(income.category)
      );
      setFilteredIncomes(newFilteredIncomes);
    }
  }, [selectedCategories, incomes]);

  return (
    <div className="font-chakra max-w-[1290px] mx-auto flex flex-col items-start px-0 md:px-5 md:flex-row gap-10 py-0 md:py-10">
      <div className="w-full md:w-1/3 p-5 text-white border rounded-md dark:border-gray-600">
        <EntryExpenseIncome
          onAddIncomeOrExpense={handleIncomeOrExpense}
          onHandleIsIncome={setIsIncome}
          isIncome={isIncome}
          editIncome={editIncome}
          isEdit={isEdit}
          editExpense={editExpense}
          isExpenseEdit={isExpenseEdit}
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
              filteredIncomes={filteredIncomes}
              onEditIncome={handleEditIncome}
              onDeleteIncome={handleDeleteIncome}
              onHandleSortAscendingIncome={handleSortAscendingIncome}
              onHandleSortDescendingIncome={handleSortDescendingIncome}
              onHandleFilterByCheckboxChange={setSelectedCategories}
            ></TrackIncome>
          </div>
          <div className="flex-1 w-full md:w-1/2 border rounded-md dark:border-gray-600">
            <TrackExpense
              expenses={expenses}
              onHandleEditExpense={handleEditExpense}
              onDeleteExpense={handleDeleteExpense}
            ></TrackExpense>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
