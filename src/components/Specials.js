import Card from "./Card";
import { Link } from "react-router-dom";
import greekSalad from "../assets/greek salad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg"

function Specials(){
    return(
        <section className="Specials">
            <div>
                <h1>This weeks specials!</h1>
                <Link to="/"><button type="button"><h3>Online Menu</h3></button></Link>
            </div>
            <div className="Cards">
                <Card 
                description="The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."  
                image={greekSalad}
                name="Greek Salad" 
                price="$9.99"/>
                
                <Card 
                description="Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."  
                image={bruschetta}
                name="Bruschetta" 
                price="$12.99"/>
                
                <Card 
                description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."  
                image={lemonDessert}
                name="Lemon Dessert" 
                price="$5.49"/>
            
            </div>
        </section>
    );
}

export default Specials;