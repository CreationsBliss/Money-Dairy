// Save income to local storage
function saveIncome(income) {
  localStorage.setItem("Incomes", JSON.stringify(income));
}

// Get income from local storage
function getIncome() {
  return JSON.parse(localStorage.getItem("Incomes"));
}

// Save expense to local storage
function saveExpense(expense) {
  localStorage.setItem("Expenses", JSON.stringify(expense));
}

// Get expense from local storage
function getExpense() {
  return JSON.parse(localStorage.getItem("Expenses"));
}

export { getExpense, getIncome, saveExpense, saveIncome };
