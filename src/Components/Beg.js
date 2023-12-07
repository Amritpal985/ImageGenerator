import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
// import Resume from "./Components/Resume";
import Contact from "../Components/Contact";
// import Portfolio from "./Components/Portfolio";
import Questions  from "../Components/Questions";
import Gan from "../Components/gan"
export default function Beg({state}) {

    return (
        <>
        <Header data={state.resumeData.main} />
        <About data={state.resumeData.main} />
        {/* <Resume data={this.state.resumeData.resume} /> */}
        {/* <Portfolio data={this.state.resumeData.portfolio} /> */}
        <Questions />
        <Gan/>
        <Contact data={state.resumeData.main} />
        <Footer data={state.resumeData.main} />
        </>   
    );
    }
    
