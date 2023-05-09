import { useState } from "react";
import { expenses, data, deleteTransaction } from "./tracker";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Expenses = () => {
  const [expensesList, setExpensesList] = useState(expenses);

  const handleDelete = (index) => {
    deleteTransaction(index);
    setExpensesList([...expenses]);
  };

  return (
    <div>
      <Head>
        <title>Fintrack - Manage Your Finances</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <div className={styles.expensesHeader}>
        <h2 className={styles.center}>Expenses</h2>
        <Link href="../transactions/" className={styles.navigate}>
          Add Transaction
        </Link>
        <Link href="/" className={styles.navigate}>
          Back to Homepage
        </Link>
      </div>
      <div className={styles.tablecontainer}>
        <table className={styles.customtable}>
          <thead>
            <tr>
              <th className={styles.description}>Description</th>
              <th className={styles.label}>Label</th>
              <th className={styles.amount}>Amount</th>
              <th className={styles.timestamp}>Timestamp</th>
              <th className={styles.action}>Action</th>
            </tr>
          </thead>
          <tbody>
            {expensesList.map((expense, index) => (
              <tr key={index}>
                <td className={styles.description}>{expense.description}</td>
                <td className={styles.label}>{expense.label}</td>
                <td className={styles.amount}>{expense.amount}</td>
                <td className={styles.timestamp}>
                  {new Date(expense.timestamp).toLocaleString()}
                </td>
                <td className={styles.action}>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expenses;
