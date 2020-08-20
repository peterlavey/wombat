import React from 'react';
import './styles.css';

const Row = ({children})=> {
    return (
        <div className={'row'}>
            {children}
        </div>
    );
};

const Column = ({size = 1, children})=> {
    return (
        <div className={'col'} style={{flex: size}}>
            {children}
        </div>
    )
}

export {Row, Column};