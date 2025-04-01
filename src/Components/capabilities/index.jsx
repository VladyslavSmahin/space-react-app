import './style.scss'
import CardName from "../cardName/index.jsx";
import OurServiceList from "./ourServiceList/index.jsx";


function Capabilities() {


    return (
        <div className="capabilitiesContainer container">
            <div className="capabilities">
                <div className="capabilitiesLeftColumn">
                    <CardName text='Servises' className='capabilitiesCardName'/>
                    <img src='/images/drone_image.png' alt='spotlight' className="spotlight"/>
                    <div className="capabilitiesCopywritingContainer">
                        <h4>Copywriting</h4>
                        <p>Utilizing our strategy & copy writing, you will unlock complete continuity that aligns with
                            your objectives.</p>
                    </div>
                </div>
                <div className="capabilitiesRightColumn">
                    <h3>
                        Capabilities
                    </h3>
                    <p className='creating'>Creating and fostering a sense of community is hard, and it demands a much more strategic
                        approach. But don't worry, we're here to help you out! </p>
                    <p className='Dont'>Don't leave the success of your business to chance - let's win together!</p>
                    <OurServiceList/>
                </div>
            </div>
        </div>
    )
}

export default Capabilities