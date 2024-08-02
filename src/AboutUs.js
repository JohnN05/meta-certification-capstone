import OwnerPicA from "./assets/Mario and Adrian A.jpg";
import OwnerPicB from "./assets/Mario and Adrian b.jpg";
function AboutUs(){
    return(
        <section className="AboutUs">
            <div className="Container">
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                    We pride ourselves on offering a delightful culinary experience, blending traditional recipes with a modern twist. Come savor the rich flavors of the Mediterranean, lovingly prepared and served with a touch of contemporary flair. Join us for a meal that feels like home, where every dish tells a story.
                    </p>
                </article>
                <div className="Owners">
                    <img alt="Picture of the owners, Mario and Adrian talking" src={OwnerPicA}></img>
                    <img alt="Picture of the owners, Mario and Adrian being happy" src={OwnerPicB}></img>
                </div>
            </div>
            
        </section>
    );
}

export default AboutUs;