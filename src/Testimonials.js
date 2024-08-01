import TestimonialCard from "./TestimonialCard";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/p3.jpg";
import p4 from "./assets/p4.jpg";

function Testimonials(){
    return(
        <section className="TestimonialsSection">
            <h1>Testimonials</h1>
            <div className="Testimonials">

                <TestimonialCard 
                rating={4} 
                image={p2}
                name="Michael T." 
                quote="I can't get enough of Little Lemon's delicious gyros. The quality and taste are unmatched, and the service is always friendly and welcoming."/>

                <TestimonialCard 
                rating={5} 
                image={p3}
                name="Liam W." 
                quote="Little Lemon's vibrant and cozy atmosphere, paired with their authentic dishes, make it my favorite spot for a Mediterranean meal. The grilled kebabs are a must-try!"/>

                <TestimonialCard 
                rating={4.5} 
                image={p4}
                name="Sophia L." 
                quote="Little Lemon has quickly become my go-to restaurant for Mediterranean cuisine. The flavors are bold and authentic, and the staff treats you like family."/>
            </div>
        </section>
    )
}

export default Testimonials;
