import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs";

function Homepage(){
    return(
        <>
            <CallToAction />
            <Specials />
            <Testimonials />
            <AboutUs />
        </>
    );
}

export default Homepage;