import React from 'react';
import './index.css';
import Navbar from './components/Navbar/Nav';
import Hero from './components/HeroSection/Hero';
import AboutUsSection from './components/Section/Section';
import OurServices from './components/Section/Section';
import Project from './components/Section/Section';

import Card from './components/Cards/Card';
import Counter from './components/Counters/Counters';
import { faClock, faGift, faUsers, faAward } from '@fortawesome/free-solid-svg-icons';

import { faLaptop, faMobile, faMagic,faCode, faGraduationCap, faDesktop} from '@fortawesome/free-solid-svg-icons';
import Communicate from './components/Communicate/Communicate';
import Contact from './components/Contact/Contact';

import {AboutUsData,Services,Projects} from './data/Data';
import Footer from './components/Footer/Footer';
import FooterData from './data/FooterData';
import AccordionApp from './components/Accordion/AccodionApp';

function App() {
  
  return (
    <div>
      <header className='container-fluid' >
          <Navbar/>
           <Hero/>
         </header>

         <AboutUsSection aboutUsData={AboutUsData} /> 


         <OurServices aboutUsData={Services}/>

          <div className="container">
        <div className="row">

          <Card icon={faLaptop} title="Web App Development" description="Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge." />
          <Card icon={faMobile} title="Mobile App Development" description="We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms." />
          <Card icon={faMagic} title="Digital Marketing" description="The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform." />



                 </div>
                 </div>
                 <section className="counters">
      <div className="container">
        <Counter icon={faClock} count={13500} title="Working Hours" />
        <Counter icon={faGift} count={720} title="Completed Projects" />
        <Counter icon={faUsers} count={480} title="Happy Clients" />
        <Counter icon={faAward} count={120} title="Awards Received" />
      </div>
         </section>
      
         <Project aboutUsData={Projects}/>
          

<div className="container">
        <div className="row">
          <Card icon={faCode} title="Web App Development" description="Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge." />
          <Card icon={faGraduationCap} title="Mobile App Development" description="We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms." />
          <Card icon={faDesktop} title="Digital Marketing" description="The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform." />
                 </div>
                 </div>

          <AccordionApp/>

         <Communicate/>

         <Contact/>
         <Footer contactInfo={FooterData.contactInfo} usefulLinks={FooterData.usefulLinks} subscription={FooterData.subscription} />
    </div>
    
  );

}

export default App