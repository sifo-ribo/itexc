import "./design/contact.css";
import mail from "./image/Vectormail.png";
import phone from "./image/Vectorphone.png";
import address from "./image/Vectoraddress.png";
import { connect } from "react-redux"; 
const mapStateToProps =(state)=>{
    return{
        state:state,
    }
}
const mapDispatchtoprops=(dispatch)=>{

}


function Contact(){
    return(
        <div id="contact">
            <div id="contactme">
                <h1>Contact us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <form>
                    <label>Full Name</label><br/>
                    <input type="text" placeholder="Your name"/><br/>
                    <label>Email</label><br/>
                    <input type="text"  placeholder="Your email address"/><br/>
                    <label>Message</label><br/>
                    <textarea placeholder="Type your message..."></textarea><br/>
                    <input type="submit" value="submit"/>
                    </form>
            </div>
            <div id="availble">
                <h5>Availble also on :</h5>
                <div>
                    <span><img alt="email" src={mail}/></span>
                    <div>
                    <p><b>Email</b><br/>
                    <small>Healthy 24.@Email.com</small></p>
                    </div>
                </div>
                <div>
                <span><img alt="Address" src={address}/></span>
                    <div>
                    <p><b>Address</b><br/>
                    <small>Lorem ipsum dolor sit amet, consectetur 33</small></p>
                    </div>
                </div>
                <div>
                <span><img alt="Phone" src={phone}/></span>
                    <div>
                    <p><b>Phone Number</b> <br/>
                    <small>+1 (555) 000-0000</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchtoprops)(Contact);