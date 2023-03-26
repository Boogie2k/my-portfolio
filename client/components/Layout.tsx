import Head from "next/head"
import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas"
import styles from "../styles/Home.module.css"
import Navs from "./Nav"

export default function Layout({children}:any) {
  return (
    <>
    <Head> 
      <title>
        Portfolio
      </title>
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" ></link>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
<link rel="icon" type="image/svg+xml" href="/images/icon.jpg" />
    </Head>
    <Navs/>
    <div >{children}</div>
    </>
  )
}
