import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {useReducer} from "react";
import { fetchAPI, submitAPI} from "../FakeAPI";
import '../styles.css';
import ConfirmedBooking from "./ConfirmedBooking";

export const updateTimes = (state, action) => {
    const dateInput = new Date(action.type);
    const times = fetchAPI(dateInput.getDate());
    return times;
};

export const initializeTimes = () => {
    const today = new Date();
    const initial = fetchAPI(today.getDate());
    return(initial);
};

const submitForm = (formData) => {
    return submitAPI(formData);
};


function Main(){
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/booking" element={<BookingPage 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                submitForm = {submitForm}
                />}>
                </Route>
                <Route path="/booking-confirmed" element={<ConfirmedBooking />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
        
        
    );
}

export default Main;