import React, {useContext} from 'react';
import Cube from '../cube';
import unit from '../../assets/units.png'
import RootContext from '../../context/RootProvider'

const Unit = ()=> {
    const context = useContext(RootContext);

    return (
        <div onClick={context.addUnits} className={'cube-button'}>
            <Cube img={unit} alt={'Unidad'}/>
        </div>
    )
}

export default Unit;