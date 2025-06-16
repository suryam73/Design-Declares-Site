
import React from "react";
import { Helmet } from "react-helmet";
import Breakdown from "../Components/home/Breakdown";
import HeroSection from "../Components/home/HeroSection";
import Donate from "../Components/home/Donate";
import EmergencyActs from "../Components/home/EmergencyActs";
import EmergencyNow from "../Components/home/EmergencyNow";
import Latest from "../Components/home/Latest";
import Footer from "../Components/footer/Footer";
import CountingSection from "../Components/home/countingSection";
import Supporters from "../Components/home/Supporters";
import ToolKitSection from "../Components/home/ToolKitSection";
import MenuBar from "../Components/menu/MenuBar";
import Header from "../Components/header/Header";
import AboutDesignDeclares from "../Components/about/AboutDesignDeclares";
import Partnerships from "../Components/about/Partnerships";
import Designers from "../Components/about/Designers";
import Group from "../Components/about/Group";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Welcome to the about page" />
      </Helmet>

      
      <div className="min-h-screen flex flex-col">
   
        <div className="bg-black rounded-b-3xl p-3 flex-grow">
        <Header/>
        <AboutDesignDeclares/>
        <Partnerships/>

        <Designers/>
        <Group/>
                 
          
          <MenuBar />
        </div>

      
        <Footer />
      </div>
    </>
  );
};

export default About;
