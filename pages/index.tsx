import type { NextPage } from 'next';
import Head from 'next/head';
import { Publication } from '../components';
import styles from '../styles/Home.module.css';
import { data } from '../services/data';
import { useEffect } from 'react';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NahtanN - Projeto Estrelar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Projeto Estrelar</h1>
      <Publication />
    </div>
  );
};

export default Home;
