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
    const tens = Array(context.tens).fill().map(()=> <Cube img={tensImg} alt={'Unidades'}/>)
    const hundreds = Array(context.hundreds).fill().map(()=> <Cube img={hundredsImg} alt={'Unidades'}/>)
    const thousands = Array(context.thousands).fill().map(()=> <Cube img={thousandsImg} alt={'Unidades'}/>)

    return (
        <div className={'content'}>
            <h1>Content</h1>
            <h2>Unidades: {context.units} Decenas: {context.tens} Centenas: {context.hundreds} Unidades de mil: {context.thousands}</h2>
            <h2>Total: {context.units + (context.tens * 10) + (context.hundreds * 100) + (context.thousands * 1000)}</h2>

            {units}
            <br/>
            {tens}
            <br/>
            {hundreds}
            <br/>
            {thousands}
        </div>
    )
}

export default Content;