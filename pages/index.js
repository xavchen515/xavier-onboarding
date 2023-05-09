import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fintrack - Manage Your Finances</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <main className={styles.body}>
        <div className={styles.homepage}>
        <img src="/favicon.ico"/>
          <h1 className={styles.title}>Fintrack</h1>
          <h2 className={styles.subtitle}>Manage Your Finances with Ease</h2>
          <div className={styles.btncontainer}>
            <Link href="/overview">
              Go to Overview
            </Link>
            <Link href="/expenses">
              Track Your Expenses
            </Link>
            <Link href="/transactions">
              Add/Modify Your Transactions
            </Link>
          </div>
        </div>
        <div className={styles.credits}>Made with ❤️ by Xavier</div>
      </main>
    </>
  );
}
