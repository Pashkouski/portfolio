import React from 'react';
import './App.css';
import Header from "./Header/Header";
import {BrowserRouter} from "react-router-dom";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyWorks from "./MyWorks/MyWorks";
import Offers from "./Offers/Offers";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='container'>
                    <Header/>
                    <div >
                        <Main/>
                        <Skills/>
                        <MyWorks/>
                        <Offers/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
