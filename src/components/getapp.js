import googleplaylogo from "./image/googleplaylogo.png";
import appstorelogo from "./image/appstorelogo.png";
import star from "./image/star.png";
import "./design/getapp.css";


export default function Getapp(){
    return(
        <div id="getapp">
            <div>
                <h1>
                Get the app
                </h1>
                <h4>
                Rated 4.9 out of 5 by more than 150k reviewers.
                </h4>
                <p>
                Register in the app and be ready to see a doctor, therapist or psychiatrist anytime, anywhere. Available for iPhone and Android.
                </p>
            </div>
            <div>
                <div>
                    <img alt="appstorelogo" src={appstorelogo}/>
                    <img alt="googleplaylogo" src={googleplaylogo} />
                </div>
                <div>
                    <span> <img alt='start' src={star}/><h3>4.9</h3> </span>
                </div>
                <div>
                    <p>190.7k Rating</p>
                </div>
            </div>
        </div>
    )
}