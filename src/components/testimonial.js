import star from "./image/star.png";
import avatar from "./image/Avatar Image.png";
import "./design/testimonial.css";
import Carousel from 'react-bootstrap/Carousel';


export default function Testimonial(){
    return(
        <div id="testimonial">

            <Carousel variant="dark">
                <Carousel.Item>
                        <div className="testimonialitem">
                            <span>Testimonial</span>
                            <h3>You're in safe hands</h3>
                            <span>
                                <img alt="star" src={star}/>
                            </span>
                            <p>
                            Our caring and supportive team has experience working with patients face-to-face and dealing with mental health issues. Spend less time searching for help and more time connecting with someone you can trust.
                            </p>
                            <span><img alt="avatar" src={avatar}/> </span>
                            <h6>Christopher Nolan</h6>
                            <p>Our client</p>
                        </div>
                </Carousel.Item>
                <Carousel.Item>
                        <div className="testimonialitem">
                            <span>Testimonial</span>
                            <h3>You're in safe hands</h3>
                            <span>
                                <img alt="star" src={star}/>
                            </span>
                            <p>
                            Our caring and supportive team has experience working with patients face-to-face and dealing with mental health issues. Spend less time searching for help and more time connecting with someone you can trust.
                            </p>
                            <span><img alt="avatar" src={avatar}/> </span>
                            <h6>Christopher Nolan</h6>
                            <p>Our client</p>
                        </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}