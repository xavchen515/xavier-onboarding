import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Budget() {
  const [budgetGoal, setBudgetGoal] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSetBudget = () => {
    localStorage.setItem("budgetGoal", budgetGoal);
    setSuccessMessage("Success, budget has been set!");
  };

  const handleBudgetGoalChange = (event) => {
    setBudgetGoal(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Fintrack - Manage Your Finances</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Link href="/.." className={styles.navigate}>
        Back to Homepage
      </Link>
      <div className="container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSetBudget();
          }}
        >
          <div className="form-group">
            <label htmlFor="budgetGoal">Set your monthly budget:</label>
            <input
              type="number"
              className="form-control"
              id="budgetGoal"
              value={budgetGoal}
              onChange={handleBudgetGoalChange}
              placeholder="Enter your budget"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </>
  );
}
