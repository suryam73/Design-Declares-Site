


import Header from '../Components/header/Header'
import FilterInterface from '../Components/latest/FilterInterface'



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
import Heading from '../Components/form/heading/Heading';
import ContactForm from '../Components/contact/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Latest</title>
        <meta name="description" content="Welcome to the home page" />
      </Helmet>

      
      <div className="min-h-screen flex flex-col">
   
        <div className="bg-black rounded-b-3xl p-3 flex-grow">
            <Header/>
      <ContactForm/>
          <MenuBar />
        </div>

      
        <Footer />
      </div>
    </>
  );
};

export default Contact;
