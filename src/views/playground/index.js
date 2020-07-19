import React from 'react';
import Sidebar from "../../containers/sidebar";
import Content from "../../containers/content";
import {RootProvider} from "../../context/RootProvider";
import './styles.css';

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