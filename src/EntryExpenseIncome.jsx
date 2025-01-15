const EntryExpenseIncome = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold text-gray-800 dark:text-white lg:text-4xl">
        Money Diary
      </h1>

      <div className="my-4">
        <button className="bg-blue-500 hover:bg-blue-400 text-gray-800 font-bold dark:text-gray-200 rounded-l-lg btn-sm w-1/2">
          Income
        </button>
        <button className="bg-white hover:bg-white text-gray-800 dark:text-gray-800 font-bold rounded-r-lg btn-sm w-1/2">
          Expense
        </button>
      </div>

      <div>
        <form className="space-y-4">
          <div className="relative">
            <label className="block text-base text-gray-800 dark:text-gray-200">
              Category
            </label>
            <select className="appearance-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
              <option value="Education">Education</option>
              <option value="Food">Food</option>
              <option value="Health">Health</option>
              <option value="Bill">Bill</option>
              <option value="Insurance">Insurance</option>
              <option value="Tax">Tax</option>
              <option value="Transport">Transport</option>
              <option value="Telephone">Telephone</option>
            </select>

            <div className="absolute top-10 right-0 flex items-center pr-3 pointer-events-none">
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
            />
          </div>

          <button className="w-full px-4 py-2 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EntryExpenseIncome;
