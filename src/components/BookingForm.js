
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function BookingForm(props){
    const [resDate, setResDate] = useState("");
    const [resTime, setResTime] = useState("");
    const [resGuests, setResGuests] = useState(2);
    const [resOccasion, setResOccasion] = useState("occasion");

    const occasionStyle = {
        backgroundColor: resOccasion=="occasion" ? '#edefee' : '#495e57',
        color: resOccasion=="occasion" ? '#494949' : 'white'
    }

    const [valid, setValid] = useState({date: false, time: false, occasion: false})
    const [disabledButton, setDisabledButton] = useState(true);

    const [dateError, setDateError] = useState(false);
    const [timeError, setTimeError] = useState(false);
    const [occasionError, setOccasionError] = useState(false);

    useEffect(() => {
        setDisabledButton(!(valid.date && valid.occasion && valid.time));
    }, [valid]);

    const navigate = useNavigate();


    return(
        
        <form             
        onSubmit={(e)=>{
            e.preventDefault();
            const success = props.submitForm({
            date: {resDate},
            time: {resTime},
            guests: {resGuests},
            occasion: {resOccasion}
            });
            
            if(success){
                setTimeout(() => {
                    navigate("/booking-confirmed");
                }, 500);
            }
        }}>
            <h1>Book Now</h1>
            <fieldset>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" 
                id="res-date" 
                value={resDate}
                onChange={(e)=>{
                    setResDate(e.target.value);
                    const validDate = e.target.value!="";
                    setValid({...valid, date:validDate});
                    setDateError(!validDate);
                    props.dispatch({type: e.target.value})
                }}
                />
                {dateError && <p>Please choose a date for your reservation</p>}
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" 
                value={resTime}
                onChange={(e)=>{
                    setResTime(e.target.value);
                    const validTime = e.target.value!="";
                    setValid({...valid, time:validTime});
                    setTimeError(!validTime);
                    }}>
                    {
                    props.availableTimes.map((timeOption)=>{
                        return(
                            <option>{timeOption}</option>
                        );
                    })}
                </select>
                {timeError && <p>Please choose a time for your reservation</p>}
                <label htmlFor="guests">Number of guests: {resGuests}</label>
                <input type="range" 
                aria-valuemin={1}
                aria-valuemax={10}
                aria-valuenow={resGuests}
                min="1" 
                max="10" 
                id="guests" 
                value={resGuests}
                onChange={(e)=>{setResGuests(e.target.value);}
                }
                />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" 
                value={resOccasion}
                onChange={(e)=>{
                    setResOccasion(e.target.value);
                    const validOccasion = e.target.value!="occasion";
                    setValid({...valid, occasion:validOccasion});
                    setOccasionError(!validOccasion);
                }}
                style={occasionStyle}
                >
                    <option value="occasion" style={occasionStyle}>Occasion</option>
                    <option value="birthday" style={occasionStyle}>Birthday</option>
                    <option value="engagement" style={occasionStyle}>Engagement</option>
                    <option value="anniversary" style={occasionStyle}>Anniversary</option>
                </select>
                {occasionError && <p>Please choose an occasion for your reservation</p>}
            </fieldset>
            <input className="Button" 
            type="submit" 
            value="Make your reservation" 
            disabled={disabledButton}
            />
        </form>
    );

}

export default BookingForm;