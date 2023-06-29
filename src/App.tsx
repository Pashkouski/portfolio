import React from 'react';
import './App.css';
import Header from "./Header/Header";
import {BrowserRouter} from "react-router-dom";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyWorks from "./MyWorks/MyWorks";
import Offers from "./Offers/Offers";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='container'>
                    <Header/>
                    <div style={{position: "relative"}}>
                        <Main/>
                        <Skills/>
                        <MyWorks/>
                        <Offers/>
                        <Contact/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
