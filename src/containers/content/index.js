import React, {useContext} from 'react';

import './styles.css';
import RootContext from "../../context/RootProvider";
import Cube from "../../components/cube";
import unitsImg from '../../assets/units.png';
import tensImg from '../../assets/tens.png';
import hundredsImg from '../../assets/hundreds.png';
import thousandsImg from '../../assets/thousands.png';

const Content = ()=> {
    const context = useContext(RootContext);

    const units = Array(context.units).fill().map(()=> <Cube img={unitsImg} alt={'Unidades'}/>)
    const tens = Array(context.tens).fill().map(()=> <Cube img={tensImg} alt={'Decenas'}/>)
    const hundreds = Array(context.hundreds).fill().map(()=> <Cube img={hundredsImg} alt={'Centenas'}/>)
    const thousands = Array(context.thousands).fill().map(()=> <Cube img={thousandsImg} alt={'Unidades de mil'}/>)

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
        </div>
    )
}

export default Content;