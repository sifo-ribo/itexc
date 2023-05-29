import logoabout from "./image/logoabout.png";
import logo from "./image/logo.png";
import aboutimage from "./image/aboutimage.png";
import imageabour from "./image/Imageabout.png";
import "./design/about.css";

export default function About(){
    return(
        <div>
            <div id="about">
                <div id="about-description">
                    <h1>About  <span><img alt="logo" src={logo}/></span></h1>
                    <p>
                    With 24/7 access to online doctors, psychiatrists, psychologists, therapists and other medical experts, care is always available, anytime and anywhere. Select and see your favorite providers again and again, right from your smartphone, tablet or computer.
                    Better yet, Doctor On Demand is a covered benefit for over 98 million Americans by their health plan or employer. It’s free to sign up and easy to check your coverage when you register.
                    </p>
                </div>
                <div id="about-photos">
                        <div>
                            <div>
                                <img alt="aboutlogo"  src={logoabout}/>
                            </div>
                        </div>
                        <img alt="aboutimage" src={aboutimage}/>
                    
                </div>
            </div>
            <div id="avantages">
                <div>
                    <img alt="imageabour" src={imageabour}/>
                </div>
                <div>
                    <h1>Why choosing<span><img alt="logo" src={logo}/></span></h1>
                    <p>Meet with an urgent care doctor in minutes, 24/7.Schedule a session with a <a href=" ">therapist or psychiatrist</a> this week.</p>
                    <ul>
                        <li><span>
                            Experienced and Professional Team
                            </span>
                        </li>
                        <li><span>
                            Comprehensive Services
                            </span>
                        </li>
                        <li><span>
                            User-Friendly Interface
                            </span>
                        </li>
                        <li><span>
                            Safe and Secure Data Storage
                            </span>
                        </li>
                        <li>
                            <span>
                            Personalized Care
                            </span>
                        </li>
                        <li><span>
                            Positive Reputation
                            </span>
                        </li>
                        <li>
                            <span>
                            Convenient Access to Healthcare Services.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}