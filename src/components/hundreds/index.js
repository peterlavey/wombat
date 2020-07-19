import React, {useContext} from 'react';
import Cube from '../cube';
import hundreds from '../../assets/hundreds.png'
import RootContext from "../../context/RootProvider";

const Hundreds = ()=> {
    const context = useContext(RootContext);

    return (
        <div onClick={context.addHundreds} className={'cube-button'}>
            <Cube img={hundreds} alt={'Centena'}/>
        </div>
    )
}

export default Hundreds;