import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css';

function Main(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
        
        
    );
}

export default Main;