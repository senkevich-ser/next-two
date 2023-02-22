import Head from "next/head";
import { Montserrat } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import cn from "classnames";
import HTag from "@/components/HTag/HTag";
import Button from "@/components/Button/Button";
import Paragraph from "@/components/Paragraph/Paragraph";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Template</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={cn(styles.main, montserrat.className)}>
        <HTag tag="h1">Big text</HTag>
        <HTag tag="h2">Big text</HTag>
        <HTag tag="h3">Big text</HTag>
        <Button>Кнопка</Button>
        <Button arrow={'down'} appearance={'primary'}>Кнопка</Button>
        <Button arrow={'right'} appearance={'ghost'}>Кнопка</Button>
        <Paragraph size={'small'} >Et in qui deserunt fugiat veniam nostrud pariatur.
        Velit exercitation minim veniam sunt sunt eu ea id cillum. 
        Reprehenderit cillum nostrud mollit commodo duis laboris fugiat deserunt ut ex amet incididunt excepteur nulla. 
        Proident reprehenderit ex ipsum tempor. 
        Est occaecat qui tempor aliquip culpa do ex sunt nisi cupidatat fugiat veniam proident eiusmod.</Paragraph>
        <Paragraph size={'medium'} >Et in qui deserunt fugiat veniam nostrud pariatur.
        Velit exercitation minim veniam sunt sunt eu ea id cillum. 
        Reprehenderit cillum nostrud mollit commodo duis laboris fugiat deserunt ut ex amet incididunt excepteur nulla. 
        Proident reprehenderit ex ipsum tempor. 
        Est occaecat qui tempor aliquip culpa do ex sunt nisi cupidatat fugiat veniam proident eiusmod.</Paragraph>
        <Paragraph size={'large'} >Et in qui deserunt fugiat veniam nostrud pariatur.
        Velit exercitation minim veniam sunt sunt eu ea id cillum. 
        Reprehenderit cillum nostrud mollit commodo duis laboris fugiat deserunt ut ex amet incididunt excepteur nulla. 
        Proident reprehenderit ex ipsum tempor. 
        Est occaecat qui tempor aliquip culpa do ex sunt nisi cupidatat fugiat veniam proident eiusmod.</Paragraph>
      </main>
    </>
  );
}
