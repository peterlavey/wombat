import React from 'react';
import wombat from '../../assets/images/wombat.png';
import './styles.css';
import {Column, Row} from "../../components/grid";

const Header = ()=> {
    return (
        <header>
            <Row>
                <Column size={1}>
                    <img src={wombat} style={{maxWidth: '70%', maxHeight: '100%'}}/>
                </Column>
                <Column size={30}>
                    <h2 style={{margin: 'inherit', fontFamily: 'Barika', position: 'relative', top: '5px'}}>
                        Wombat
                    </h2>
                </Column>
            </Row>
        </header>
    )
}

export default Header;