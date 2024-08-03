import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {useReducer} from "react";
import { fetchAPI} from "../FakeAPI";
import '../styles.css';

const updateTimes = (state, action) => {
    const dateInput = new Date(action.type);
    const times = fetchAPI(dateInput.getDate());
    return times;
}

const initializeTimes = () => {
    const today = new Date();
    const initial = fetchAPI(today.getDate());
    return(initial);
};

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