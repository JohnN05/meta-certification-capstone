import restauranfood from './assets/restauranfood.jpg'
import { Link } from 'react-router-dom';

function CallToAction(){
    return(
        <section className="CallToAction">
        <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We area family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
            <Link to="/booking"><button type="button"><h3>Reserve a Table</h3></button></Link>
        </article>
        <article className="imageContainer">
            <img src={restauranfood}></img>
        </article>
        
    </section>
    );
}

export default CallToAction;