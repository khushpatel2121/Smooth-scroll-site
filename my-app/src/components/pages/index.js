import React,{useState}from 'react'
import HeroSection from '../Hero';
import InfoSection from '../InfoSection';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { homeObjOne, homeObjtwo } from '../InfoSection/Data';

function Home() {

const [isOpen,setOpen] = useState(false);

const toggle =()=>{
    setOpen(!isOpen);
};


  return (
<>
      <Navbar  isOpen={isOpen} toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjtwo} />
</>
  )
}

export default Home;
