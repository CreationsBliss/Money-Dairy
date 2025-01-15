import CalculateIncomeExpenseBalance from "./CalculateIncomeExpenseBalance";
import EntryExpenseIncome from "./EntryExpenseIncome";
import TrackExpense from "./TrackExpense";
import TrackIncome from "./TrackIncome";

function App() {
  return (
    <div className="font-chakra max-w-[1290px] mx-auto flex flex-col px-0 md:px-5 md:flex-row gap-10 py-0 md:py-10">
      <div className="w-full md:w-1/3 p-5 text-white border rounded-md dark:border-gray-600">
        <EntryExpenseIncome></EntryExpenseIncome>
      </div>
      <div className="w-full md:w-2/3 text-white space-y-10 md:space-y-5">
        <CalculateIncomeExpenseBalance></CalculateIncomeExpenseBalance>
        <div className="flex space-x-0 md:space-x-5 space-y-3 md:space-y-0 flex-col md:flex-row">
          <TrackIncome></TrackIncome>
          <TrackExpense></TrackExpense>
        </div>
      </div>
    </div>
  );
}

export default App;
