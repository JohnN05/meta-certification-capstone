
import React, {useState} from "react";

function BookingForm(props){
    const [resDate, setResDate] = useState("");
    const [resTime, setResTime] = useState("");
    const [resGuests, setResGuests] = useState(2);
    const [resOccasion, setResOccasion] = useState("");
    
    return(
        <form styles="display: grid; max-width: 200px; gap: 20px">
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
                    {props.availableTimes.map((timeOption)=>{
                        return(
                            <option>{timeOption}</option>
                        );
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
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
                onChange={(e)=>{setResOccasion(e.value)}}>
                    <option>Birthday</option>
                    <option>Engagement</option>
                    <option>Anniversary</option>
                </select>
            </fieldset>
            <input type="submit" 
            value="Make your reservation" 
            onSubmit={(e)=>{
                e.preventDefault();
            }
            }/>
        </form>
    );

}

export default BookingForm;