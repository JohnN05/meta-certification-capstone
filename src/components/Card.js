import delivery from '../assets/fast-delivery.png';

function Card(props){
    return(
    <section className="Card">
        <img className="CardImage" alt={props.name} src={props.image}></img>
        <h3>{props.name}</h3>
        <h4>{props.price}</h4>
        <p>{props.description}</p>
        <div>
            <h5>Order a delivery </h5>
            <img alt="Food delivery icon" height="25px" src={delivery}></img> 
        </div>
        
    </section>)
}

export default Card;