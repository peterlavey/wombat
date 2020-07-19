import React from 'react';
import './styles.css';
import Unit from "../../components/unit";
import Tens from "../../components/tens";
import Hundreds from "../../components/hundreds";
import Thousands from "../../components/thousands";

const Sidebar = ()=> {
    return (
        <aside>
            <Unit/>
            <Tens/>
            <Hundreds/>
            <Thousands/>
        </aside>
    )
}

export default Sidebar;