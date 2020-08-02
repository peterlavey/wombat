import React, {useContext} from 'react';
import Cube from '../cube';
import thousands from '../../assets/thousands.png'
import RootContext from "../../context/RootProvider";

const Thousands = ()=> {
    const context = useContext(RootContext);

    return (
        <div onClick={context.addThousands} className={'cube-button'}>
            <Cube img={thousands} alt={'Unidad de mil'}/>
        </div>
    )
}

export default Thousands;