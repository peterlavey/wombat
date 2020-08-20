import React, {useEffect, useState} from 'react'

const RootContext = React.createContext({});

const RootProvider = (props)=> {
    const [units, setUnits] = useState(0);
    const [tens, setTens] = useState(0);
    const [hundreds, setHundreds] = useState(0);
    const [thousands, setThousands] = useState(0);
    const [result, setResult] = useState(0);

    useEffect(()=> {
        setResult(units + (tens * 10) + (hundreds * 100) + (thousands * 1000));
    }, [units, tens, hundreds, thousands]);

    const addUnits = () => {
        if(units === 9) {
            setUnits(0);
            addTens();
        } else {
            setUnits(units + 1);
        }
    };

    const addTens = () => {
        if(tens === 9) {
            setTens(0);
            addHundreds();
        } else {
            setTens(tens + 1);
        }
    }

    const addHundreds = () => {
        if(hundreds === 9) {
            setHundreds(0);
            addThousands();
        } else {
            setHundreds(hundreds + 1);
        }
    }

    const addThousands = () => {
        setThousands(thousands + 1);
    }

    const removeUnits = () => units? setUnits(units - 1): false;
    const removeTens = () => tens? setTens(tens - 1): false;
    const removeHundreds = () => hundreds? setHundreds(hundreds - 1): false;
    const removeThousands = () => thousands? setThousands(thousands - 1): false;

    const { children } = props

    return (
        <RootContext.Provider value={{
            units,
            tens,
            hundreds,
            thousands,
            result,
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