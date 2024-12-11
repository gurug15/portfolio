import {HERO_CONTENT} from "../constants/index"
import profilepic from "../assets/Guru.png"
import { motion } from "framer-motion"

const container = (delay: number) =>({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay},
  }
})

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
               <div className="flex flex-col items-center lg:items-start">
                 <motion.h1 variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Guruprasad Gastgar</motion.h1>
                 <motion.span variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-50 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Software Developer</motion.span>
                 <motion.p variants={container(1)}
                            initial="hidden"
                            animate="visible" 
                            className="my-2 max-w-xl py-6 font-light tracking-tight">{HERO_CONTENT}</motion.p>
               </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center"> 
                   <motion.img style={{width:500}}
                               className="rounded-2xl"
                               initial={{x:100,opacity:0}}
                               animate={{x:0,opacity:1}}
                               transition={{duration:1,delay:1.1}}
                               src={profilepic} alt="" />
              </div>
            </div>
        </div>
    </div> 
  )
}
