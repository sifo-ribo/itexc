import faqimage from "./image/faqImage.png";
import "./design/faq.css";
import faUserDoctor  from './image/faUserDoctor.png';
import faCommentDots  from './image/faCommentDots.png';
import Accordion from 'react-bootstrap/Accordion';

export default function Faq(){
    return(
        <div id='faq'>
            
            <div id="faqdescriptiontitre">
                    <span><img alt="faCommentDots" src={faCommentDots}/> </span>
                    <h1>FAQ</h1>
            </div>
            <div id="faqdescription">
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                </p>
                <div id="Accordion">
                <Accordion defaultActiveKey="0">
                <Accordion.Item  eventKey="0">
                    <Accordion.Header><span>01: </span> Question text goes here</Accordion.Header>
                    <Accordion.Body>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item  eventKey="1">
                    <Accordion.Header><span>02: </span> Question text goes here</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item  eventKey="2">
                    <Accordion.Header><span>03: </span> Question text goes here</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                
                </div>
            </div>
            <div id="faqimage">
                <span><img alt="faqimage" src={faqimage}/></span>
                <div id="faqimagedescription">
                    <h5>Still have a question?</h5>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div >
                    
                    <a href="#contact">Contact us</a>
                    <span><img alt="faUserDoctor" src={faUserDoctor}/> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}