import React, {useState} from "react";

function BookingForm(){
    const [resDate, setResDate] = useState(undefined);
    const [resTime, setRestTime] = useState(undefined);
    const [resGuests, setResGuests] = useState(2);
    const [resOccasion, setResOccasion] = useState("");

    return(
        <form style="display: grid; max-width: 200px; gap: 20px">
            <label for="res-date">Choose date</label>
            <input type="date" 
            id="res-date" 
            value={resDate}
            onChange={(e)=>{setResDate(e.target.value)}}
            />
            <label for="res-time">Choose time</label>
            <select id="res-time" 
            value={resTime}
            onChange={(e)=>{setRestTime(e.target.value)}}
            >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label for="guests">Number of guests</label>
            <input type="range" 
            min="1" 
            max="10" 
            id="guests" 
            value="resGuests"
            onChange={(e)=>{setResGuests(e.target.value)}}
            />
            <label for="occasion">Occasion</label>
            <select id="occasion" 
            value="resOccasion"
            onChange={(e)=>{setResOccasion(e.target.value)}}
            >
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make your reservation" />
        </form>
    );

}

export default BookingForm;