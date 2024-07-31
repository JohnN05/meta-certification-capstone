import restauranfood from './assets/restauranfood.jpg'
function Main(){
    return(
        <section className="display">
            <article className="displayText">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We area family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                <button type="button"><h3>Reserve a Table</h3></button>
            </article>
            <article className="imageContainer">
                <img src={restauranfood}></img>
            </article>
            
        </section>
    );
}

export default Main;