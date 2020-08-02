import React, {useContext, useState} from 'react';
import RootContext from "../../context/RootProvider";
import './styles.css';
import Toggle from "../toggle";

const Results = ()=> {
    const context = useContext(RootContext);
    const [hideResult, sethideResult] = useState(true);

    const showSwitch = ()=> sethideResult(!hideResult);

    return (
        <div className={'results-container'}>
            <h3>Representación simbólica <Toggle onChange={showSwitch}/></h3>

            <div hidden={hideResult}>
                <p>
                    {context.units + (context.tens * 10) + (context.hundreds * 100) + (context.thousands * 1000)}
                </p>
            </div>
        </div>
    )
}

export default Results;