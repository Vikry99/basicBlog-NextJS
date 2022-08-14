import { ReactNode } from "react";
import styles from "../../styles/Layout.module.css";
import Footer from "../Footer";
import Header from "../Header";
import Head   from "next/head";

interface LayoutProps {
    children : ReactNode;
    pageTitle : string
}

export default function Layout(props : LayoutProps) {
    const {children, pageTitle} = props;
    return (
    <div className= {styles.container}>
        <>
        <Head>
            <title>Nextjs Basic | {pageTitle} </title>
            <meta name="description" content="Website NextJS Basic"/>
        </Head>
        <Header/>
        <div className={styles.content} >{children}</div>
        <Footer/>
        </>
    </div>
  )
}
