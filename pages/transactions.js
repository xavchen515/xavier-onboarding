import { useState } from "react";
import styles from "@/styles/Home.module.css";
import { addTransaction } from "./tracker";
import Link from "next/link";
import Head from "next/head";

export default function AddTransaction() {
  const [description, setDescription] = useState("");
  const [label, setLabel] = useState("dining");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call addTransaction function from tracker.js and pass the description, label, and amount as parameters
    addTransaction(description, label, amount);

    // Clear the form inputs after submission
    setDescription("");
    setLabel("dining");
    setAmount(0);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Fintrack - Add Transaction</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/" className={styles.navigate}>
        Back to Homepage
      </Link>
      <h1 className={styles.pageTitle}>Add Transaction</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Description:{" "}
          </label>
          <input
            type="text"
            id="description"
            className={styles.inputField}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="label" className={styles.label}>
            Label:{" "}
          </label>
          <select
            className={styles.select}
            id="label"
            value={label}
            onChange={(event) => setLabel(event.target.value)}
          >
            <option className={styles.option} value="dining">
              Dining Out
            </option>
            <option className={styles.option} value="entertainment">
              Entertainment
            </option>
            <option className={styles.option} value="groceries">
              Groceries
            </option>
            <option className={styles.option} value="care">
              Personal care
            </option>
            <option className={styles.option} value="transportation">
              Transportation
            </option>
            <option className={styles.option} value="utilities">
              Utilities
            </option>
            <option className={styles.option} value="others">
              Others
            </option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="amount" className={styles.label}>
            Amount:{" "}
          </label>
          <input
            type="tel" // use the tel type to remove the leading zeros
            step="0.01" // allow decimals to the hundredths place
            id="amount"
            className={styles.inputField}
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}
