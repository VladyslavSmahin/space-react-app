import './App.css'
import Capabilities from "./Components/capabilities/index.jsx";
import BornIn from "./Components/bornIn/index.jsx";
import WeAreHiring from "./Components/we_are_hiring/index.jsx";
import Divider from "./Components/devider/index.jsx";
import Network from "./Components/network/index.jsx";
import Statistic from "./Components/statistic/index.jsx";

function App() {

    return (
        <div className='app'>
            <WeAreHiring />
            <BornIn/>
            <Divider/>
            <Capabilities/>
            <Network/>
            <Statistic/>
            <Divider/>
        </div>
    )
}

export default App
