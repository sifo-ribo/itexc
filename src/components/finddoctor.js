import "./design/finddoctor.css";
import finddoctorimage from "./image/finddoctor.png";

export default function Finddoctor(){
    return(
        <div id="finddoctor">
            <div id='finddoctordescription'>
                <h1>
                Find The Best doctor you need
                </h1>
                <p>
                From rashes to colds, stress management to diabetes management, individual treatment plans are created around you. Our medical and mental health providers work together, keeping your personal journey protected and connected.
                </p>
                <input type="button" value="Get Started"/>
            </div>
            <div id="doctorimage">
                <img alt="finddoctorimage" src={finddoctorimage}/>
            </div>
        </div>
    )
}