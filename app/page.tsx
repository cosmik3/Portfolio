"use client"
import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero/hero";
import Nav from "@/components/Nav/nav";
import Experience from "@/components/Experience/experience";
import Lenis from '@studio-freight/lenis'
import About from "@/components/About/about";
import Skills from "@/components/Skills/skillSection";
import CursorFollowingBlob from "@/components/UI/Blob/cursorFollowingBlob";
import Projects from "@/components/Projects/projects";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
import Footer from "@/components/Footer/footer";
import Preloader from "@/components/UI/Preloader/preloader";
import { AnimatePresence } from "framer-motion";



export default function Home() {


  const [isLoading , setIsLoading] = useState<boolean>(true)



  useEffect(() =>{

    setTimeout(() =>{
      setIsLoading(false)
    }, 3000)
  
    const lenis = new Lenis()

    function raf(time: number) {

      lenis.raf(time)
      requestAnimationFrame(raf)

    }
    requestAnimationFrame(raf)


  })


  return (
    <main className="relative h-screen">
    <Provider store={store}>
      <AnimatePresence mode="wait">
       {isLoading && <Preloader/>}
      </AnimatePresence>
      <CursorFollowingBlob/>
      <Nav/>
      <Hero/>
      <About/>
      <Experience/>
      {/* <Skills/> */}
      <Projects/> 
      <Footer/>
    </Provider> 
    </main>
  );
}
 
