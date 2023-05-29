import hospitalimage from "./image/hospitalimage.png";
import "./design/hospitalsearch.css";

export default function Hospitalsearch(){
    return(
        <div id="hospitalsearch">
            <div id="hospitalimage">
                <img alt="hospitalimage" src={hospitalimage}/>
            </div>
            <div id="hospitaldescription">
                <h1>Search the Nearest hospital from you</h1>
                <p>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
                <input type="button" value="Search"/>
            </div>
        </div>
    )
}