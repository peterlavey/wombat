import React from 'react';
import Sidebar from "../../containers/sidebar";

import './styles.css';
import Content from "../../containers/content";

const Playground = ()=> {
    return (
        <div className={'wrapper'}>
            <Sidebar/>
            <Content/>
        </div>
    )
}

export default Playground;