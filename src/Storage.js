// Save income to local storage
function saveIncome(income) {
  localStorage.setItem("Incomes", JSON.stringify(income));
}

// Get income from local storage
function getIncome() {
  return JSON.parse(localStorage.getItem("Incomes"));
}

export { getIncome, saveIncome };
