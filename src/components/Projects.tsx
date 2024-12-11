import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
    <motion.h2 
    whileInView={{opacity:1,y:0}}
    animate={{opacity:0,y:-50}}
    transition={{duration:0.7,delay:.1}}
    className="my-20 text-center text-4xl">Projects</motion.h2>
    <div>
       {PROJECTS.map((project, idx)=> {
           return <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
               <div className="w-full lg:w-1/4 flex justify-center">
                     <motion.img
                     whileInView={{opacity:1,x:0}}
                     animate={{opacity:0,x:-100}}
                     transition={{duration:.8,delay:.2}}
                     className="mb-2 mr-10 rounded-lg" width={250} height={150}  src={project.image} alt="project" />
               </div>
               <motion.div 
               whileInView={{opacity:1,x:0}}
               animate={{opacity:0,x:100}}
               transition={{duration:.8,delay:.2}}
               className="w-full max-w-xl lg:w-3/4">
                   <h6 className="mb-2 font-semibold"><a  className="hover:text-blue-500" href={project.link}>{project.title}</a></h6>
                   <p className="mb-4 text-neutral-400">{project.description}</p>
                   <div className="flex flex-wrap">{project.technologies.map((item,idx)=>{
                       return <span key={idx} className="mr-2 mt-4 rounded-lg bg-neutral-900 px-2 py-1 text-sm font font-medium text-purple-800 ">{item}</span>
                   })}</div>
               </motion.div>
           </div>
       })}
    </div>
</div>
  )
}
