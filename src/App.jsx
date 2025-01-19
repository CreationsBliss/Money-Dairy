import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CalculateIncomeExpenseBalance from "./CalculateIncomeExpenseBalance";
import EntryExpenseIncome from "./EntryExpenseIncome";
import { getExpense, getIncome, saveExpense, saveIncome } from "./Storage";
import TrackExpense from "./TrackExpense";
import TrackIncome from "./TrackIncome";

function App() {
  const [incomes, setIncomes] = useState(getIncome() || []);
  const [expenses, setExpenses] = useState(getExpense() || []);
  const [isIncome, setIsIncome] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [isExpenseEdit, setIsExpenseEdit] = useState(false);
  const [editIncome, setEditIncome] = useState(null);
  const [editExpense, setEditExpense] = useState(null);

  const [filteredIncomes, setFilteredIncomes] = useState(incomes);
  const [filteredExpenses, setfilteredExpenses] = useState(expenses);
  const [selectedIncomesCategories, setSelectedIncomesCategories] = useState(
    []
  );
  const [selectedExpensesCategories, setSelectedExpensesCategories] = useState(
    []
  );

  // Add income or expense through Income entry form
  function handleIncomeOrExpense(newIncomeOrExpense) {
    if (isIncome) {
      if (!isEdit) {
        setIncomes([...incomes, newIncomeOrExpense]);
        toast.success("Income Added!");
        // Save Income to Local Storage
        saveIncome([...incomes, newIncomeOrExpense]);
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
        // Save Income to Local Storage after Update the Income
        saveIncome(
          incomes.map((income) => {
            if (income.id === newIncomeOrExpense.id) {
              return newIncomeOrExpense;
            }
            return income;
          })
        );
      }
    } else {
      if (!isExpenseEdit) {
        setExpenses([...expenses, newIncomeOrExpense]);
        toast.success("Expense Added!");
        // Save Expense to Local Storage
        saveExpense([...expenses, newIncomeOrExpense]);
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
        // Save Expense to Local Storage after Editing the Expense
        saveExpense(
          expenses.map((expense) => {
            if (expense.id === newIncomeOrExpense.id) {
              return newIncomeOrExpense;
            }
            return expense;
          })
        );
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
    // Save Incomes to Local Storage after deletion
    saveIncome(incomes.filter((income) => income.id !== incomeToBeDeleted.id));
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
    // Save Expenses to Local Storage after deletion
    saveExpense(
      expenses.filter((expense) => expense.id !== expenseToBeDeleted.id)
    );
  }

  // Sort Income by Ascending order
  function handleSortAscendingIncome() {
    const sorted = [...incomes].sort((a, b) => a.amount - b.amount);
    setIncomes(sorted);
  }

  // Sort Income by Descending order
  function handleSortDescendingIncome() {
    const sorted = [...incomes].sort((a, b) => b.amount - a.amount);
    setIncomes(sorted);
  }

  // Sort Expense by Ascending order
  function handleSortAscendingExpense() {
    const sorted = [...expenses].sort((a, b) => a.amount - b.amount);
    setExpenses(sorted);
  }

  // Sort Expense by Descending order
  function handleSortDescendingExpense() {
    const sorted = [...expenses].sort((a, b) => b.amount - a.amount);
    setExpenses(sorted);
  }

  // Filter Income by Checkbox value
  useEffect(() => {
    if (selectedIncomesCategories.length === 0) {
      setFilteredIncomes(incomes);
    } else {
      const newFilteredIncomes = incomes.filter((income) =>
        selectedIncomesCategories.includes(income.category)
      );
      setFilteredIncomes(newFilteredIncomes);
    }
  }, [selectedIncomesCategories, incomes]);

  // Filter Expense by Checkbox value
  useEffect(() => {
    if (selectedExpensesCategories.length === 0) {
      setfilteredExpenses(expenses);
    } else {
      const newFilteredExpenses = expenses.filter((expense) =>
        selectedExpensesCategories.includes(expense.category)
      );
      setfilteredExpenses(newFilteredExpenses);
    }
  }, [selectedExpensesCategories, expenses]);

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
              onHandleFilterByCheckboxChange={setSelectedIncomesCategories}
            ></TrackIncome>
          </div>
          <div className="flex-1 w-full md:w-1/2 border rounded-md dark:border-gray-600">
            <TrackExpense
              expenses={expenses}
              filteredExpenses={filteredExpenses}
              onHandleEditExpense={handleEditExpense}
              onDeleteExpense={handleDeleteExpense}
              onHandleSortAscendingExpense={handleSortAscendingExpense}
              onHandleSortDescendingExpense={handleSortDescendingExpense}
              onHandleFilterByCheckboxChange={setSelectedExpensesCategories}
            ></TrackExpense>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
