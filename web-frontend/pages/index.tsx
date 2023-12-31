import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material";

const inter = Inter({ subsets: ['latin'] })
const theme = createTheme();

export default function Home(){
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Bonial - Brochure CMS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Bonial - Brochures Application
          </p>
        </div>

          <div className={styles.helpMessage}>
              <h4>Begin by visiting the url pattern /[city]/[product] eg. <Link href="/Berlin/Bier" style={{ textDecoration: "underline", color: "blue" }}>here</Link></h4>
          </div>


      </main>
    </ThemeProvider>
  )
}
