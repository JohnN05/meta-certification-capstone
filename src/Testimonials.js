import TestimonialCard from "./TestimonialCard";
function Testimonials(){
    return(
        <section>
            <h1>Testimonials</h1>
            <div className="Testimonials">
                <TestimonialCard 
                rating="5" 
                image="" 
                name="John Smith" 
                quote=""/>
                
                <TestimonialCard 
                rating="5" 
                image="" 
                name="John Smith" 
                quote=""/>

                <TestimonialCard 
                rating="5" 
                image="" 
                name="John Smith" 
                quote=""/>

                <TestimonialCard 
                rating="5" 
                image="" 
                name="John Smith" 
                quote=""/>
            </div>
        </section>
    )
}

export default Testimonials;
