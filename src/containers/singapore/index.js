import React, {useContext, useEffect, useState} from 'react';

import './styles.css';
import RootContext from "../../context/RootProvider";
import Cube from "../../components/cube";
import unitsImg from '../../assets/images/unit.svg';
import tensImg from '../../assets/images/tens.svg';
import hundredsImg from '../../assets/images/hundreds.svg';
import thousandsImg from '../../assets/images/thousands.svg';
import Modal from "../../components/modal";
import {Column, Row} from "../../components/grid";

const Singapore = ()=> {
    const context = useContext(RootContext);

    const units = Array(context.units).fill().map((el, i)=> <Cube img={unitsImg} alt={'Unidades'} key={`unit-${i}`}/>)
    const tens = Array(context.tens).fill().map((el, i)=> <Cube img={tensImg} alt={'Decenas'} key={`ten-${i}`}/>)
    const hundreds = Array(context.hundreds).fill().map((el, i)=> <Cube img={hundredsImg} alt={'Centenas'} key={`hundred-${i}`}/>)
    const thousands = Array(context.thousands).fill().map((el, i)=> <Cube img={thousandsImg} alt={'Unidades de mil'} key={`thousand-${i}`}/>)
    const [show, setShow] = useState(false);

    const showResult = (event)=> {
        if(event.key === 'Enter'){
            setShow(true);
        }
    }

    useEffect(()=> {
        document.addEventListener('keyup', showResult);

        return ()=> document.removeEventListener('keyup', showResult);
    }, []);

    return (
        <div className={'content'}>
            <div className={'place-value'} onClick={context.removeThousands}>
                <h2>Unidad de mil</h2>
                {thousands}
            </div>

            <div className={'place-value'} onClick={context.removeHundreds}>
                <h2>Centena</h2>
                {hundreds}
            </div>

            <div className={'place-value'} onClick={context.removeTens}>
                <h2>Decena</h2>
                {tens}
            </div>

            <div className={'place-value'} onClick={context.removeUnits}>
                <h2>Unidad</h2>
                {units}
            </div>

            <Modal show={show} setShow={setShow}>
                <Row>
                    <Column>
                        <h1 align={'center'}>Representación simbólica</h1>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <h2 align={'center'}>{context.result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h2>
                    </Column>
                </Row>
            </Modal>
        </div>
    )
}

export default Singapore;