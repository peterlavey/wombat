import React from 'react';
import unit from '../../assets/units.png'
import './styles.css';

const Cube = ()=> {
    return (
        <div className={'cube'}>
            <img src={unit} alt={'Unidad'} width={150} height={87}/>
        </div>
    )
}

export default Cube;