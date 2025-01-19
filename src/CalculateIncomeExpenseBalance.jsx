const CalculateIncomeExpenseBalance = ({ incomes, expenses }) => {
  // Total income calculation
  const totalIncome = incomes.reduce(
    (accumulator, income) => accumulator + parseFloat(income.amount),
    0
  );

  // Total expense calculation
  const totalExpense = expenses.reduce(
    (accumulator, expense) => accumulator + parseFloat(expense.amount),
    0
  );

  // Total balance calculation
  const totalBalance = totalIncome - totalExpense;

  return (
    <div className="flex flex-col px-0 space-y-3 md:flex-row md:space-y-0">
      <div className="w-full md:w-1/3 p-4 text-white text-center border-l border-t border-b border-r md:border-r-0 rounded-l-md rounded-r-md md:rounded-r-none dark:border-gray-600">
        <h1
          className={`text-3xl font-semibold lg:text-4xl ${
            totalBalance > 0 || totalBalance === 0
              ? "text-gray-800 dark:text-white"
              : "text-red-700 dark:text-red-700"
          }`}
        >
          BDT {totalBalance}
        </h1>
        <p className="text-base">Balance</p>
      </div>

      <div className="w-full md:w-1/3 p-4 text-white text-center border rounded-md md:rounded-none dark:border-gray-600">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
          BDT {totalIncome}
        </h1>
        <p className="text-base">Total Income</p>
      </div>

      <div className="w-full md:w-1/3 p-4 text-white text-center border-t border-b border-r  border-l md:border-l-0 rounded-r-md rounded-l-md md:rounded-l-none dark:border-gray-600">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
          BDT {totalExpense}
        </h1>
        <p className="text-base">Total Expense</p>
      </div>
    </div>
  );
};

export default CalculateIncomeExpenseBalance;
