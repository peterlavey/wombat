import React, {useContext} from 'react';
import RootContext from "../../context/RootProvider";
import Singapore from "../singapore";

const Content = ()=> {
    const context = useContext(RootContext);

    return (
        <div>
            <Singapore/>
        </div>
    )
}

export default Content;