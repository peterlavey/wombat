import React, { Component, useState } from 'react'

const RootContext = React.createContext({});

const RootProvider = (props)=> {
    const [units, setUnits] = useState(0);
    const [tens, setTens] = useState(0);
    const [hundreds, setHundreds] = useState(0);
    const [thousands, setThousands] = useState(0);

    const addUnits = () => {
        if(units === 9) {
            setUnits(0);
            addTens();
        } else {
            setUnits(units + 1);
        }
    };

    const removeUnits = () => {
        if(units) setUnits(units - 1);
    }

    const addTens = () => {
        if(tens === 9) {
            setTens(0);
            addHundreds();
        } else {
            setTens(tens + 1);
        }
    }

    const removeTens = () => {
        if(tens) setTens(tens - 1);
    }

    const addHundreds = () => {
        if(hundreds === 9) {
            setHundreds(0);
            addThousands();
        } else {
            setHundreds(hundreds + 1);
        }
    }

    const removeHundreds = () => {
        if(hundreds) setHundreds(hundreds - 1);
    }

    const addThousands = () => {
        setThousands(thousands + 1);
    }

    const removeThousands = () => {
        if(thousands) setThousands(thousands - 1);
    }

    const { children } = props

    return (
        <RootContext.Provider value={{
            units,
            tens,
            hundreds,
            thousands,
            addUnits,
            addTens,
            addHundreds,
            addThousands,
            removeUnits,
            removeTens,
            removeHundreds,
            removeThousands
        }}>
            {children}
        </RootContext.Provider>
    )
}

export default RootContext

export {RootProvider}