import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
import Link from "next/link";
import VulnChart from "./monthChart";
import WeekChart from "./weekChart";
import DayChart from "./dayChart";
import WeekPieChart from "./weekPiechart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const username = "Xavier"; // replace with actual username
  const currentTime = new Date();
  const hours = currentTime.getHours();

  let greeting;
  if (hours < 12) {
    greeting = "Good morning";
  } else if (hours < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <>
      <Head>
        <title>Fintrack - Manage Your Finances</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Link href="/.." className={styles.navigate}>
          Back to Homepage
        </Link>
        <div className={styles.welcome}>
          <h1 className={styles.greeting}>{`${greeting}, ${username}`}</h1>
        </div>
        <div className={styles.description}>
          <div className={styles.pieChartContainer}>
            <h2 className={styles.pieChartTitle}>Here's a breakdown of your spending this week:</h2>
            <WeekPieChart />
          </div>
        </div>
        <div className={styles.bar}>
        <div className={styles.description}>
          <p>Today's Spending</p>
        </div>
          <DayChart />
        </div>
        <div className={styles.chartContainer}>
          <div className={styles.chart}>
            <div className={styles.description}>
              <p>This Week's Spending</p>
            </div>
            <WeekChart />
          </div>
          <div className={styles.chart}>
            <div className={styles.description}>
              <p>MoM Spending</p>
            </div>
            <VulnChart />
          </div>
        </div>
      </main>
    </>
  );
}
