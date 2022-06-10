import React,{useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour } from '../components/Products/data'
import NavbarUser from '../components/NavbarUser'

const ProductsPage = () => {

  return (
    <>
     <NavbarUser />
     
     <Products {...homeObjOne}/>
     <Products {...homeObjTwo}/>
     <Products {...homeObjThree}/>
     <Products {...homeObjFour}/>
     
     <Footer />
    </>
  )
}

export default ProductsPage