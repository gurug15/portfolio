import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import {motion } from "framer-motion";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
       <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
       <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-8">
             <div className="flex items-center justify-center">
                <motion.img whileInView={{x:0,opacity:1}}
                            initial={{x:-100, opacity:0}}
                            transition={{duration:1,delay:0.4}}
                            className="rounded-2xl" src={aboutImg} alt="" />
             </div>
          </div>
          <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                     <motion.p 
                      whileInView={{x:0,opacity:1}}
                      initial={{x:100,opacity:0}}
                      transition={{duration:1,delay:0.3}}
                      className="my-2 max-w-xl py-6">{ABOUT_TEXT}</motion.p>
                </div>
             </div>
       </div>
    </div>
  )
}
