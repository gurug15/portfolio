import { CERTIFICATES } from "../constants";
import { motion } from "framer-motion";

export default function Certificates() {
  return (
    <div className="border-b border-neutral-900 pb-4">
         <motion.h2
         whileInView={{opacity:1,y:0}}
         animate={{opacity:0,y:-50}}
         transition={{duration:0.7,delay:.1}}
         className="my-20 text-center text-4xl">Certificates</motion.h2>
         <div>
            {CERTIFICATES.map((certificate, idx)=> {
                return <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4 flex justify-center">
                          <motion.img
                          whileInView={{opacity:1,x:0}}
                          animate={{opacity:0,x:-100}}
                          transition={{duration:.8,delay:.2}}
                          className="mb-2 w-40 h-40 rounded-lg" src={certificate.image} alt="certificate" />
                    </div>
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    animate={{opacity:0,x:100}}
                    transition={{duration:.8,delay:.2}}
                     className="w-full max-w-xl lg:w-3/4">
                        <h6><a href={certificate.link} className="mb-2 font-semibold hover:text-blue-500 hover:underline cursor-pointer">{certificate.role} -<span className="text-sm text-purple-300">{certificate.company}</span></a></h6>
                        <p className="mb-4 text-neutral-400">{certificate.description}</p>
                        <div className="flex flex-wrap">{certificate.technologies.map((item,idx)=>{
                            return <span key={idx} className="mr-2 mt-4 rounded-lg bg-neutral-900 px-2 py-1 text-sm font font-medium text-purple-800 ">{item}</span>
                        })}</div>
                    </motion.div>
                </div>
            })}
         </div>
    </div>
  )
}
