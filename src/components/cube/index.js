import React from 'react';
import './styles.css';

const Cube = ({img, alt})=> {
    return (
        <div className={'cube'}>
            <img src={img} alt={alt} width={150} height={87}/>
        </div>
    )
}

export default Cube;