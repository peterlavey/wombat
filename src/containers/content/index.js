import React, {useContext} from 'react';
import RootContext from "../../context/RootProvider";
import Singapore from "../singapore";
import Tutorial from "../tutorial";

const Content = ()=> {
    const context = useContext(RootContext);
    const fullWidth = {width: '80%'};

    return (
        <div style={fullWidth}>
            {context.result ? <Singapore/> : <Tutorial/>}
        </div>
    )
}

export default Content;