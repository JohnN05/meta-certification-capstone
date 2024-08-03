import Rating from "./Rating";
function TestimonialCard(props){
    const imageCaption=`Picture of ${props.name}`;
    return(
        <article className="Testimonial">
            <h3>Rating</h3>
            <Rating count={props.rating} />
            <img alt={imageCaption} src={props.image}></img>
            <h3 className="TestimonialName">{props.name}</h3>
            <p>"{props.quote}"</p>

        </article>
    );
}
export default TestimonialCard;