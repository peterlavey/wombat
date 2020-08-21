import React from 'react';
import './styles.css';
import {Column, Row} from "../../components/grid";

const margin = {margin: '3% 5%'}

const Tutorial = ()=> {
    const textSize = {
        xLarge: {fontSize: 'x-large'}
    };

    return (
        <div style={margin}>
            <Row>
                <Column>
                    <h1>Cómo empezar</h1>
                </Column>
            </Row>
            <Row>
                <Column>
                    <p style={textSize.xLarge}>
                        Añade los bloques haciendo click en la barra lateral, el resultado
                        se mostrará presionando la tecla "Enter".
                    </p>
                </Column>
            </Row>
        </div>
    );
};

export default Tutorial;