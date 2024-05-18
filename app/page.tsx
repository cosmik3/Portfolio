"use client"
import React, { useEffect } from "react";
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



export default function Home() {


  useEffect(() =>{
  
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
      <CursorFollowingBlob/>
      {/* <AnimatedCursor 
         innerSize={8}
         outerSize={55}
         innerScale={2}
         outerScale={2}
         outerAlpha={0}
         innerStyle={{
           backgroundColor: 'white'
         }}
         outerStyle={{
           border: '2px solid #0FC06B'
         }}
       /> */}
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
 
