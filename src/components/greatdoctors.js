import "./design/greatdoctors.css";
import doctor from './image/doctor.png';

export default function Greatdoctors(){
    return(
        <div id='greatdoctors'>
                <h1>Our secret to great virtual care is great doctors</h1>
                <p>Board-certified | Top 5% of medical specialists in the world | +90% satisfaction rating</p>
                <img alt="doctor" src={doctor}/>
        </div>
    )
}