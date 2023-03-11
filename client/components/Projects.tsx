import Link from 'next/link'
import React from 'react'
import projectsStyles from "../styles/Projects.module.css"
import Fade from 'react-reveal'
import LightSpeed from 'react-reveal'
import ReactMarkdown from "react-markdown";
const Projects = ({articles}:any) => {
console.log(articles)
  return (

    <section className={projectsStyles.projects}>
       <LightSpeed left>
      <h4 className={projectsStyles.title}>Projects</h4> 
      <p className={projectsStyles.intro}> <span>Less talk, more codes!</span> Below are some of the projects I have built and contributed to </p></LightSpeed>
<Fade bottom>
      <article className={projectsStyles.items}>
        <>
        {articles.tasks.map((items:any)=>{return(
<div key={items._id} className={projectsStyles.item}> 

<div className={projectsStyles.box}> 
 <img src={items.image} alt =''/> 

 <h5 className={projectsStyles.projectName} >{items.name}</h5>
 <p className={projectsStyles.projectDesc}>{items.desc}</p>

 <Link className='btn btn-warning' style={{color:"white"}} href={items.src} target="_blank" >View source code</Link> <Link className='btn btn-success' href={items.site} target="_blank" >View site</Link>

 <ReactMarkdown  >
{items.lang}
 </ReactMarkdown>
</div> 
</div>
        )})}
      
</>
      </article>

      <p className={projectsStyles.gitLink}>Other Projects can be explored in  <a href='wwww.github.com.boogie2k' target='_blank'>my github profile</a> </p>
      </Fade>
    </section>
  )
}

export default Projects


