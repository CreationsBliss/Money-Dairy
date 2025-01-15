const CalculateIncomeExpenseBalance = () => {
  return (
    <div className="flex flex-col px-0 space-y-3 md:flex-row md:space-y-0">
      <div className="w-full md:w-1/3 p-4 text-white text-center border-l border-t border-b border-r md:border-r-0 rounded-l-md rounded-r-md md:rounded-r-none dark:border-gray-600">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
          BDT 200000
        </h1>
        <p className="text-base">Balance</p>
      </div>

      <div className="w-full md:w-1/3 p-4 text-white text-center border rounded-md md:rounded-none dark:border-gray-600">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
          BDT 100000
        </h1>
        <p className="text-base">Total Income</p>
      </div>

      <div className="w-full md:w-1/3 p-4 text-white text-center border-t border-b border-r  border-l md:border-l-0 rounded-r-md rounded-l-md md:rounded-l-none dark:border-gray-600">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
          BDT 500000
        </h1>
        <p className="text-base">Total Expense</p>
      </div>
    </div>
  );
};

export default CalculateIncomeExpenseBalance;
