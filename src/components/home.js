import "./design/home.css"
import hand from "./image/hand.png";
import bag from "./image/bag.png"
import availability  from "./image/24h.png"
import headphones from "./image/headphones.png"
export default function Home(){
    return(
        <div id="home">
            <div id="container-get-started">
                <h1>Feel Better about Finding <span id="last-word">Healthcare</span></h1>
                <p>Healththy 24 Online ranks highest in telehealth satisfaction among direct-to-consumer brands.</p>
                <input type="button" id="btn-get-started" value="get-started"/>
            </div>
            <div id="services">
                <div className="service">
                    <div><img src={hand} alt="Online consultations" /></div>
                    <div className="services-details">Online consultations</div>
                </div>
                <div className="service">
                    <div><img src={bag} alt="Medical advice " /></div>
                    <div className="services-details">Medical advice and second opinions</div>
                </div>
                <div className="service">
                    <div><img src={availability} alt="availability" /></div>
                    <div className="services-details">availability<br/>24/7</div>
                </div>
                <div className="service">
                    <div><img src={headphones} alt="Health education" /></div>
                    <div className="services-details">Health education and resources</div>
                </div>
            </div>
        </div>
    )
}