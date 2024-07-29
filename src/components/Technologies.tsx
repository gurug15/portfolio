//@ts-nocheck
import { AiOutlineKubernetes } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiDocker } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { LiaJenkins } from "react-icons/lia";
import { RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import { SiAnsible, SiExpress, SiMongodb, SiTerraform } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion} from "framer-motion"


const iconVariants = (duration:number)=>({
    initial: {y: -10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        animate={{opacity:0,y:-50}}
        transition={{duration:0.7,delay:.1}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        animate={{opacity:0,x:-100}}
        transition={{duration:1, delay:0.4}}
        className="flex flex-wrap items-center justify-center gap-4">
              <motion.div 
              variants={iconVariants(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
                  <RiReactjsLine className="text-6xl text-cyan-400"/>
              </motion.div>
              <motion.div 
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
                  <RiNodejsLine className="text-6xl text-green-400"/>
              </motion.div>
              <motion.div 
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
                  <SiExpress className="text-6xl text-white "/>
              </motion.div>
              <motion.div
              variants={iconVariants(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
                  <TbBrandNextjs className="text-6xl text-white"/>
              </motion.div>
              <motion.div 
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
                  <SiMongodb className="text-6xl text-green-500"/>
              </motion.div>
              <motion.div 
              variants={iconVariants(6)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
                  <BiLogoPostgresql className="text-6xl text-sky-700"/>
              </motion.div>
              <motion.div 
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
                  <FaAws className="text-6xl text-orange-400"/>
              </motion.div>
              <motion.div 
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
                  <DiDocker className="text-6xl text-sky-500"/>
              </motion.div>
              <motion.div 
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
                  <AiOutlineKubernetes className="text-6xl text-sky-400"/>
              </motion.div>
              <motion.div 
              variants={iconVariants(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
                  <SiTerraform className="text-6xl text-purple-700"/>
              </motion.div>
              <motion.div 
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
                  <SiAnsible className="text-6xl text-black bg-white rounded-full"/>
              </motion.div>
              <motion.div 
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
                  <LiaJenkins className="text-6xl text-red-600"/>
              </motion.div>
              
        </motion.div>
    </div>
  )
}
