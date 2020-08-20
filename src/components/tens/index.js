import React, {useContext} from 'react';
import Cube from '../cube';
import tens from '../../assets/images/tens.png'
import RootContext from "../../context/RootProvider";

const Tens = ()=> {
    const context = useContext(RootContext);

    return (
        <div onClick={context.addTens} className={'cube-button'}>
            <Cube img={tens} alt={'Decena'}/>
        </div>
    )
}

export default Tens;