import React from 'react';
import './styles.css';
import Unit from "../../components/unit";
import Tens from "../../components/tens";
import Hundreds from "../../components/hundreds";
import Thousands from "../../components/thousands";
import Results from "../../components/results";

const Sidebar = ()=> {
    return (
        <aside>
            <Unit/>
            <Tens/>
            <Hundreds/>
            <Thousands/>
            <Results/>
        </aside>
    )
}

export default Sidebar;