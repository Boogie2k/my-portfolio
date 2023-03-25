import heroStyles from "../styles/Hero.module.css"

import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <>
   <section className={` ${heroStyles.hero } ${heroStyles.bigHero}`}>
    <article>  {/* <Fade  left> */}
    <div className={heroStyles.details}>
     
          <p className={heroStyles.hi} style={{color:'#61dafb'}}>Hi, my name is</p>
         <h4>Oghosa Benjamin</h4>   
         <h5>Fullstack developer</h5>
          <p className={heroStyles.desc}>I am a fullstack developer with skills in HTML, CSS, JavaScript,NodeJS,mongoDB, React Native my area of specialty is frontend development</p>
      <div className={ `${heroStyles.contact}`}> <a href='mailto:oghosabenjamin@gmail.com' className="btn btn-primary" target="_blank"> Contact me</a> 
      </div>    </div>{/* </Fade>  <Fade  right> */}
       
       
        <Image src="/images/ben.jpg" width="400" height="400"alt =''/>
     {/*  </Fade> */}
        </article>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-chevron-down ${heroStyles.arrowDown}`} viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>
      </section>
       <section className={` ${heroStyles.hero } ${heroStyles.smallHero}`}>
    <article>  {/* <Fade  right>
        */}
       
        <Image src="/images/ben.jpg" width ='224' height ='224' alt =''/>
     {/*  </Fade> <Fade  left> */}
    <div  className={heroStyles.details} >
      <p  style={{color:'#61dafb', fontSize:'1.2rem'}}>Hi, my name is</p>
         <h4>Oghosa Benjamin</h4>   
         <h5   style={{color:'#61dafb'}}>Fullstack web developer</h5>
          <p className={heroStyles.desc}>I am a fullstack web developer with skills in HTML, CSS, JavaScript,NodeJS,mongoDB, my area of specialty is frontend development</p>
          <div className={ `${heroStyles.contact}`}> <a href='mailto:oghosabenjamin@gmail.com' className="btn btn-primary" target="_blank"> Contact me</a> </div> 
        </div>{/* </Fade>  */}
       {/*   <img src='/images/vector.png' alt='' width='50' height='50'/> */}
       
        </article>

   
      </section>
      </>
  )
}

export default Hero
