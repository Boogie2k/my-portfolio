import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import ScrollSpy from "react-ui-scrollspy";
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact';
import { social } from '@/data/social';
import { style } from '@mui/system';


export default function Home({articles}:any) {
  return (
   <section className={styles.home}>
    <Hero  /> 
 <ScrollSpy>  
   <div id="about"> <About/> </div>
   <div id="projects"> <Projects articles={articles}/> </div>
   <div id="contact"><Contact/></div>

    <ul className={styles.socials}>
        {social.icons.map((icon:any) => {
          const { img, link, id } = icon;
          return (
            <li key = {id}>
              <a target="_blank" href={link}>
                {img}
              </a>
            </li>
          );
        })}
      </ul> 
   </ScrollSpy>
    </section>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://portfolio-server-w83j.onrender.com/api/v1/portfoilio"
  );
  const articles = await res.json();

  return {
    props: { articles },
  };
}
