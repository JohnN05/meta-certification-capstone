
import React, {useState} from "react";
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
    
    const navigate = useNavigate();

    return(
        
        <form>
            <h1>Book Now</h1>
            <fieldset>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" 
                id="res-date" 
                value={resDate}
                onChange={(e)=>{
                    setResDate(e.target.value)
                    props.dispatch({type: e.target.value})
                }}
                />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" 
                value={resTime}
                onChange={(e)=>{setResTime(e.target.value)}}>
                    {
                    props.availableTimes.map((timeOption)=>{
                        return(
                            <option>{timeOption}</option>
                        );
                    })}
                </select>
                <label htmlFor="guests">Number of guests: {resGuests}</label>
                <input type="range" 
                aria-valuemin={1}
                aria-valuemax={10}
                aria-valuenow={resGuests}
                min="1" 
                max="10" 
                id="guests" 
                value={resGuests}
                onChange={(e)=>{setResGuests(e.target.value)}
                }
                />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" 
                value={resOccasion}
                onChange={(e)=>{
                    setResOccasion(e.target.value)
                }}
                style={occasionStyle}
                >
                    <option value="occasion" style={occasionStyle}>Occasion</option>
                    <option value="birthday" style={occasionStyle}>Birthday</option>
                    <option value="engagement" style={occasionStyle}>Engagement</option>
                    <option value="anniversary" style={occasionStyle}>Anniversary</option>
                </select>
            </fieldset>
            <input className="Button" type="submit" 
            value="Make your reservation" 
            onSubmit={(e)=>{
                e.preventDefault();
                const success = props.submitForm({
                date: {resDate},
                time: {resTime},
                guests: {resGuests},
                occasion: {resOccasion}
                });
                
                if(success){
                    navigate("/booking-confirmed");
                }
            }}
            />
        </form>
    );

}

export default BookingForm;