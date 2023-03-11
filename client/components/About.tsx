import aboutStyles from "../styles/About.module.css"
import Fade from 'react-reveal'
import LightSpeed from 'react-reveal'
import { type } from "os"

const About = () => {



let school=[{id:1,name:'Columbia high school',type:"secondary school", duration:'2014 - 2016'},{id:2,name:'University of Benin',type:"BENG in Computer Engineering", duration:'2017 - 2023'}]
let skills:Array<String> =['HTML', 'CSS', 'JavaScript', 'ReactJs', 'typeScript', 'nestJS', 'NodeJS','ExpressJs', 'MongoDB']
let experience =[{id:1,type:'ICT Instructor', work:'Bright Future Educational Centre', year:'2022'},{id:2,type:'Student Intern', work:'Ipson Technology', year:'2022'} ]
  return (
    <section className={aboutStyles.about}>
      <LightSpeed left>
      <h4 className={aboutStyles.title}>About me</h4>
</LightSpeed>
      <div className="row">

        <div  className={`col-sm-12 col-md-6 ${aboutStyles.exp}`}>
         <Fade bottom>
          <p className={aboutStyles.intro}>
            I am a web Devloper with skills both in Frontend and Backend development
            I specialise mainly on Frontend Development. I have built various web applications using HTML, CSS,
            JavaScript, React, mongoDB, nodeJS, express and so much more
            </p></Fade> 
    
  <article>
         <Fade bottom>
        <h4 className={aboutStyles.exps}>Experience</h4>
        {experience.map(item=>{
          return(
          <div key={item.id}>
          <h5 className= {aboutStyles.expType}>{item.type}</h5>
           <h5  className= {aboutStyles.expWork}>{item.work}</h5>
            <p  className= {aboutStyles.expYear}>{item.year}</p>
         </div> 
      )
        })}</Fade>
      </article>
            </div> <div className= "col-sm-12 col-md-6">
              <article className={aboutStyles.edu}>
                 <Fade bottom>
              <h4 className={aboutStyles.edus}>Eduction</h4>

{school.map(item=>{return(

  <div key={new Date().getTime()}>
  <h5 className={aboutStyles.SchoolType}>{item.type}</h5>
  <p className={aboutStyles.schoolName}>{item.name}</p>
  <p className={aboutStyles.schoolDuration}>{item.duration}</p>
  </div>
)})}</Fade>
           </article>
 
           <article className={aboutStyles.skillsSet}>
             <Fade bottom>
  <h4 className= {aboutStyles.skills}>Skills</h4>
  <ul className={aboutStyles.skillsList}>
  {skills.map(items=>{return(
   <li key={new Date().getTime()}>{items}</li>
  )})}</ul></Fade>
           </article>
            </div>
      </div>
    </section>
  )
}

export default About