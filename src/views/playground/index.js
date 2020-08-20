import React from 'react';
import Content from "../../containers/content";
import './styles.css';
import Sidebar from "../../containers/sidebar";

const Playground = ()=> {
    return (
        <div className={'wrapper'}>
            <Sidebar/>
            <Content/>
        </div>
    )
}

export default Playground;