import appstore from "./image/appstorelogo.png";
import playstor from "./image/googleplaylogo.png";
import "./design/foter.css";

export default function Footer(){
    return(
        <div id="footer">
            <div>
                <div>
                    <h5>Help center</h5>
                    <ul>
                        <li>Frequently Asked Questions</li>
                        <li>Driver Training Platform</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div>
                    <h5>Healthy 24</h5>
                    <ul>
                        <li>C.G.U</li>
                        <li>Privacy</li>
                        <li>Press</li>
                        <li>Partnership</li>
                    </ul>
                </div>
                <div>
                    <h5>Download the application</h5>
                    <div>
                        <img alt="appstore" src={appstore}/>
                        <img alt="playstore" src={playstor}/>
                    </div>
                </div>
            </div>
            <div>
                <p>Healthi 2023</p>
            </div>
        </div>
    )
}