import './design/visits.css';
import visitlogo from "./image/visitslogo.png";

export default function Visits(){
    return(
        <div id='visits'>
            <div id='description'>
                <h1>
                We're here for you
                </h1>
                <p>
                Visits start at $79 for a 15 min consultation, or could be free depending on your insurance. See <a href="  ">costs</a> for more information.
                </p>
            </div>
            <div id="typevisits">
                <div className='typevisit'>
                    
                        <div className='visittitre'>
                            <h4>Cold & flu</h4>
                            <span><img alt='visitlogo' src={visitlogo}/> </span>
                        </div>
                        <div>
                            <ul>
                                <li>Cough</li>
                                <li>Headaches</li>
                                <li>Nausea & vomiting</li>
                                <li>Fever</li>
                            </ul>
                        </div>
                    
                </div>
                <div className='typevisit'>
                    
                        <div className='visittitre'>
                            <h4>Mental health</h4>
                            <span><img alt='visitlogo' src={visitlogo}/> </span>
                        </div>
                        <div>
                            <ul>
                                <li>Cough</li>
                                <li>Headaches</li>
                                <li>Nausea & vomiting</li>
                                <li>Fever</li>
                            </ul>
                        </div>
                    
                </div>
                <div className='typevisit'>
                    
                        <div className='visittitre'>
                            <h4>Cold & flu</h4>
                            <span><img alt='visitlogo' src={visitlogo}/> </span>
                        </div>
                        <div>
                            <ul>
                                <li>Cough</li>
                                <li>Headaches</li>
                                <li>Nausea & vomiting</li>
                                <li>Fever</li>
                            </ul>
                        </div>
                    
                </div>
                <div className='typevisit'>
                    
                        <div className='visittitre'>
                            <h4>Mental health</h4>
                            <span><img alt='visitlogo' src={visitlogo}/> </span>
                        </div>
                        <div>
                            <ul>
                                <li>Cough</li>
                                <li>Headaches</li>
                                <li>Nausea & vomiting</li>
                                <li>Fever</li>
                            </ul>
                        </div>
                    
                </div>
                <div className='typevisit'>
                    
                        <div className='visittitre'>
                            <h4>Headaches</h4>
                            <span><img alt='visitlogo' src={visitlogo}/> </span>
                        </div>
                        <div>
                            <ul>
                                <li>Cough</li>
                                <li>Headaches</li>
                                <li>Nausea & vomiting</li>
                                <li>Fever</li>
                            </ul>
                        </div>
                    
                </div>
                <div className='typevisit'>
                    
                        <div className='visittitre'>
                            <h4>Everyday care</h4>
                            <span><img alt='visitlogo' src={visitlogo}/> </span>
                        </div>
                        <div>
                            <ul>
                                <li>Cough</li>
                                <li>Headaches</li>
                                <li>Nausea & vomiting</li>
                                <li>Fever</li>
                            </ul>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}