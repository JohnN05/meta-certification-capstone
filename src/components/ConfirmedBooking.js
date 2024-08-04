import chef from '../assets/restaurant chef B.jpg'
function ConfirmedBooking(){
    return(
        <section className="ConfirmedBooking">
            <h1>Booking has been confirmed</h1>
            <h2>See you soon!</h2>
            <img alt="Picture of a dish from Little Lemon" src={chef}></img>

        </section>
    );
}

export default ConfirmedBooking;