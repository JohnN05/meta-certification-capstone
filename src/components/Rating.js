import fullStar from "../assets/full-star.png";
import halfStar from  "../assets/half-star.png";
function Rating(props){
    const stars = [];
    for(var i=0; i<Math.floor(props.count);i++){
        stars.push(<div><img alt="Star" className="Star" src={fullStar}></img></div>);
    }
    if(Math.floor(props.count)!=props.count){
        stars.push(<div><img alt="Half of a Star" className="Star" src={halfStar}></img></div>)
    }
    for(var j=Math.round(props.count); j<5; j++){
        stars.push(<div className="Placeholder"></div>)
    }

    return(<div className="Rating">{stars}</div>);
}

export default Rating;