import React, { useRef } from 'react'
import styles from './footer.module.scss'
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { FaGithub } from "react-icons/fa";
import { SocialLinks } from '@/database/socialLinks';





const Footer = () => {

  const target = useRef<HTMLDivElement>(null)
  const isInView = useInView(target, {once: true});

  return (
    <footer id='Footer' ref={target} className={styles.container}>
        <div className={styles.headerTitle}>
            <h1>Let's Connect.</h1>
            <Link className={styles.email} href={'mailto:manurajbhar12@gmail.com'}>manurajbhar12@gmail.com</Link>
        </div>
        <div className={styles.innerContainer}>
            <div className={styles.socialLinks}>
                {SocialLinks.map((link, i) =>{
                     const Icon = link.icon;
                    return <Link className={styles.link} href={link.link}><Icon size={35}/></Link>
                })}
            </div>
        </div>
        <div 
        style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transformOrigin: 0,
            transition: "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        className={`${styles.svgIcon1}`}>
            <Image fill alt="Hello" src={"/icons/smile.svg"}/>
        </div>
        <div className={styles.copyright}>
            <h1>Developed By Manu R with 💚</h1>
            <h1 className='text-white'>Powered By Next js and Vercel</h1>
        </div>
        
    </footer>
  )
}

export default Footer