export const expenseCategoryData = [
  "Education",
  "Food",
  "Health",
  "Bill",
  "Insurance",
  "Tax",
  "Transport",
  "Telephone",
];

export const incomeCategoryData = ["Salary", "Outsourcing", "Bond", "Dividend"];

export const defaultData = [
  {
    id: crypto.randomUUID(),
    type: "expense",
    amount: 2000,
    category: "Education",
    date: "2025-06-11",
  },
  {
    id: crypto.randomUUID(),
    type: "income",
    amount: 3000,
    category: "Salary",
    date: "2025-06-10",
  },
];
