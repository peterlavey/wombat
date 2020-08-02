import React from 'react';
import './styles.css';

const Toggle = ({onChange})=> {
    return (
        <label className="switch">
            <input type="checkbox" onChange={onChange}/>
            <span className="slider round"/>
        </label>
    )
}

export default Toggle;