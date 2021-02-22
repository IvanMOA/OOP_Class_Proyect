import { GetServerSideProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { atom, RecoilRoot, useRecoilState } from "recoil";
import React from "react";
import { Restaurant } from "@prisma/client";
import { PrismaClient } from "@prisma/client"
import { getCookieParser } from "next/dist/next-server/server/api-utils";
import Cookies from "cookies"

const prisma = new PrismaClient()

interface HomeSSProps {
  restaurants: Restaurant[];
}

interface HomeProps extends HomeSSProps {}

const Home = ({ restaurants } : HomeSSProps) => {
  console.log(restaurants);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=""></main>
    </div>
  );
}

export default Home

export const getServerSideProps: GetServerSideProps<HomeSSProps> = async (
  { req, res }
) => {
  const cookie = new Cookies(req, res)
  cookie.set('test', 'xd')
  const restaurants = await prisma.restaurant.findMany()
  return {
    props: { restaurants },
  };
};
