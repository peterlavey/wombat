import React, {useContext} from 'react';
import './styles.css';
import RootContext from "../../context/RootProvider";

const Sidebar = ()=> {
    const context = useContext(RootContext);

    return (
        <aside>
            <Item text={'Unidad'} onClick={context.addUnits}/>
            <Item text={'Decena'} onClick={context.addTens}/>
            <Item text={'Centena'} onClick={context.addHundreds}/>
            <Item text={'Unidad de mil'} onClick={context.addThousands}/>
        </aside>
    );
};

const Item = ({text, onClick})=> {
    return (
        <div onClick={onClick}>{text}</div>
    );
};

export default Sidebar;