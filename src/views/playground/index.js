import React from 'react';
import Content from "../../containers/content";
import {RootProvider} from "../../context/RootProvider";
import './styles.css';
import Sidebar from "../../containers/sidebar";

const Playground = ()=> {
    return (
        <div className={'wrapper'}>
            <RootProvider value={{}}>
                <Sidebar/>
                <Content/>
            </RootProvider>
        </div>
    )
}

export default Playground;