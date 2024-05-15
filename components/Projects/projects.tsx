import { text_reveal_animation_1 } from '@/animations/TextReveal/text-reveal.cofig'
import styles from './projects.module.scss'
import {motion, useInView} from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import { LuGithub } from "react-icons/lu";
import { projects } from '@/database/projectsData';
import { useRef } from 'react';


const Projects = () => {
    const body  = useRef<HTMLDivElement>(null)
    const inView =  useInView(body, {once: true})

  return (
    <div id='Projects' ref={body} className={styles.container}>
        <div className={styles.lineMask}>
                <motion.p 
                variants={text_reveal_animation_1} 
                initial="initial" 
                animate={inView ? "enter" : ""}>
                    Projects
                </motion.p>
        </div>
        <div className={styles.innerContainer}>
            <div className={styles.projectsContainer}>
                {projects.map((p, i) => {
                    return  (
                <motion.div 
                variants={text_reveal_animation_1} 
                initial="initial" animate={inView ? "enter" : ""}
                 key={i} className={styles.projectsCard}>
                    <div className={styles.imageDiv}>
                        <Image src={p.img} style={{scale: `${p.scale}`}} objectFit="cover" layout="fill" alt='recipe-book'/>
                        <Link className={styles.link} href={""}>See On Github <LuGithub/> </Link>
                    </div>
                    <div className={styles.discDiv}>
                        <p className='font-bold'>{p.name}</p>
                        <p className={styles.discription}>{p.discripiton}</p>
                        <div className={styles.techUsed}>
                            {p.techStack.map((t, i) =>{
                                return <p key={i}>{t}</p>
                            })}
                        </div>
                    </div>
             </motion.div>
             )})}
               
            </div>
        </div>

    </div>
  )
}

export default Projects