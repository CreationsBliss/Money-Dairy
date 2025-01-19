import { useEffect, useState } from "react";

const EntryExpenseIncome = ({
  onAddIncomeOrExpense,
  isIncome,
  onHandleIsIncome,
  editIncome,
  isEdit,
  editExpense,
  isExpenseEdit,
}) => {
  const [income, setIncome] = useState({
    id: crypto.randomUUID(),
    category: "",
    amount: "",
    date: "",
  });

  // If isEdit is true then render the form with value to be edited
  useEffect(() => {
    if (isEdit) {
      setIncome(editIncome);
    }
  }, [isEdit, editIncome]);

  const [expense, setExpense] = useState({
    id: crypto.randomUUID(),
    category: "",
    amount: "",
    date: "",
  });

  // If isEdit is true then render the form with value to be edited
  useEffect(() => {
    if (isExpenseEdit) {
      setExpense(editExpense);
    }
  }, [isExpenseEdit, editExpense]);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (isIncome) {
      setIncome({
        ...income,
        [name]: value,
      });
    } else {
      setExpense({
        ...expense,
        [name]: value,
      });
    }
  }

  function handleFormValue(e) {
    e.preventDefault();

    if (isIncome) {
      onAddIncomeOrExpense(income);
      setIncome({
        id: crypto.randomUUID(),
        category: "",
        amount: "",
        date: "",
      });
    } else {
      onAddIncomeOrExpense(expense);
      setExpense({
        id: crypto.randomUUID(),
        category: "",
        amount: "",
        date: "",
      });
    }
  }

  return (
    <div>
      <h1 className="text-3xl text-center font-semibold text-gray-800 dark:text-white lg:text-4xl">
        Money Diary
      </h1>

      <div className="my-4">
        <button
          onClick={() => onHandleIsIncome(true)}
          className={`text-gray-800 font-bold rounded-l-lg btn-sm w-1/2 ${
            isIncome
              ? "bg-blue-500 hover:bg-blue-400 dark:text-gray-200 transition-all duration-300"
              : "bg-white hover:bg-white dark:text-gray-800 transition-all duration-300"
          }`}
        >
          Income
        </button>
        <button
          onClick={() => onHandleIsIncome(false)}
          className={`text-gray-800  font-bold rounded-r-lg btn-sm w-1/2 ${
            isIncome
              ? "bg-white hover:bg-white dark:text-gray-800 transition-all duration-300"
              : " bg-blue-500 hover:bg-blue-400 dark:text-gray-200 transition-all duration-300"
          }`}
        >
          Expense
        </button>
      </div>

      <div>
        <form onSubmit={handleFormValue} className="space-y-4">
          <div className="relative">
            <label
              htmlFor="category"
              className="block text-base text-gray-800 dark:text-gray-200"
            >
              Category
            </label>

            {isIncome ? (
              <select
                id="category"
                className="appearance-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="category"
                value={income.category}
                onChange={handleChange}
                required
              >
                <option value=" ">Select Category</option>
                <option value="Salary">Salary</option>
                <option value="Outsourcing">Outsourcing</option>
                <option value="Bond">Bond</option>
                <option value="Dividend">Dividend</option>
              </select>
            ) : (
              <select
                id="category"
                className="appearance-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="category"
                value={expense.category}
                onChange={handleChange}
                required
              >
                <option value=" ">Select Category</option>
                <option value="Food">Food</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Bill">Bill</option>
                <option value="Transport">Transport</option>
                <option value="Telephone">Telephone</option>
                <option value="Tax">Tax</option>
                <option value="Insurance">Insurance</option>
              </select>
            )}

            <div className="absolute top-11 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div>
            <label
              htmlFor="amount"
              className="block text-base text-gray-800 dark:text-gray-200"
            >
              Amount
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="123456"
              id="amount"
              name="amount"
              value={isIncome ? income.amount : expense.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-base text-gray-800 dark:text-gray-200"
            >
              Date
            </label>
            <input
              type="date"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="date"
              name="date"
              value={isIncome ? income.date : expense.date}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EntryExpenseIncome;
