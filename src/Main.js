import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {useReducer} from "react";
import './styles.css';

const updateTimes = (state, action) => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

const initializeTimes = () => {return []};

function Main(){
    
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
        
        
    );
}

export default Main;