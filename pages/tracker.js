export const monthdata = [
  {
    label: "Last month",
    data: [85, 75, 120, 40, 18, 90, 12],
    backgroundColor: "blue",
  },
  {
    label: "This month",
    data: [18, 20, 25, 15, 6, 80, 24],
    backgroundColor: "skyblue",
  },
];

export const weekdata = [
  {
    label: "This week",
    data: [8, 12, 15, 8, 3, 0, 15],
    backgroundColor: "lightblue",
  },
];

export const data = [
  {
    label: "Today",
    data: [0, 0, 0, 0, 0, 0, 0],
    backgroundColor: "darkblue",
  },
];

export const piedata = [
  {
    label: "",
    data: [8, 12, 15, 8, 3, 0, 15],
    backgroundColor: [
      "red",
      "blue",
      "yellow",
      "green",
      "orange",
      "purple",
      "grey",
    ],
  },
];

export const expenses = [];

export function addTransaction(description, label, amount) {
  const timestamp = new Date().getTime(); // Get current timestamp
  const transaction = { description, label, amount, timestamp };

  // Update the data array with the label and amount of the transaction
  switch (label) {
    case "dining":
      data[0].data[0] += amount;
      break;
    case "entertainment":
      data[0].data[1] += amount;
      break;
    case "groceries":
      data[0].data[2] += amount;
      break;
    case "care":
      data[0].data[3] += amount;
      break;
    case "transportation":
      data[0].data[4] += amount;
      break;
    case "utilities":
      data[0].data[5] += amount;
      break;
    case "others":
      data[0].data[6] += amount;
      break;
    default:
      break;
  }

  // Add the transaction to the expenses array
  expenses.push(transaction);
}

export function deleteTransaction(index) {
  const transaction = expenses[index];

  // Update the data array with the label and amount of the transaction
  switch (transaction.label) {
    case "dining":
      data[0].data[0] -= transaction.amount;
      break;
    case "entertainment":
      data[0].data[1] -= transaction.amount;
      break;
    case "groceries":
      data[0].data[2] -= transaction.amount;
      break;
    case "care":
      data[0].data[3] -= transaction.amount;
      break;
    case "transportation":
      data[0].data[4] -= transaction.amount;
      break;
    case "utilities":
      data[0].data[5] -= transaction.amount;
      break;
    case "others":
      data[0].data[6] -= transaction.amount;
      break;
    default:
      break;
  }

  // Remove the transaction from the expenses array
  expenses.splice(index, 1);
}
