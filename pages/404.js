/* eslint-disable @next/next/no-img-element */
import React from 'react'
import NavBar from "../components/Banner/NavBar"
import Footer from "../components/Footer"
const Index = () => {
  return (
    <div>
        <NavBar />
        <img src="/assets/404.png" alt="404" className=" max-w-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <Footer css='fixed bottom-0 w-full'/>
    </div>
  )
}

export default Index