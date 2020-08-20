import React from 'react';
import './styles.css';
import {Column, Row} from "../../components/grid";

const margin = {margin: '3% 5%'}

const Tutorial = ()=> {
    return (
        <div style={margin}>
            <Row>
                <Column>
                    <h1>Cómo empezar</h1>
                </Column>
            </Row>
            <Row>
                <Column>
                    <p>
                        Añade los bloques haciendo click en la barra lateral, el resultado
                        se mostrara presionado la tecla "Enter".
                    </p>
                </Column>
            </Row>
        </div>
    );
};

export default Tutorial;