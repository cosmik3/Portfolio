import React from 'react'
import styles from './nav.module.scss'

const Nav = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  };


  return (
    <div className={styles.container}>
        <p onClick={() => scrollToSection('Hero')} >Home</p>
        <p onClick={() => scrollToSection('About')}>About</p>
        <p onClick={() => scrollToSection('Experience')}>Work</p>
        <p onClick={() => scrollToSection('Footer')}>Contact</p>
        <p onClick={() => scrollToSection('Projects')}>Projects</p>
    </div>
  )
}

export default Nav