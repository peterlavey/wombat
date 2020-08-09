import React, { Component, useEffect } from 'react'

const RootContext = React.createContext({});

class RootProvider extends Component {
    state = {
        units: 0,
        tens: 0,
        hundreds: 0,
        thousands: 0
    }

    addUnits = () => {
        if(this.state.units === 9) {
            this.setState({units: 0});
            this.addTens();
        } else {
            this.setState({units: this.state.units + 1});
        }
    }

    removeUnits = () => {
        if(this.state.units > 0) this.setState({units: this.state.units - 1});
    }

    addTens = () => {
        if(this.state.tens === 9) {
            this.setState({tens: 0});
            this.addHundreds();
        } else {
            this.setState({tens: this.state.tens + 1});
        }
    }

    removeTens = () => {
        if(this.state.tens > 0) this.setState({tens: this.state.tens - 1});
    }

    addHundreds = () => {
        if(this.state.hundreds === 9) {
            this.setState({hundreds: 0});
            this.addThousands();
        } else {
            this.setState({hundreds: this.state.hundreds + 1});
        }
    }

    removeHundreds = () => {
        if(this.state.hundreds > 0) this.setState({hundreds: this.state.hundreds - 1});
    }

    addThousands = () => {
        this.setState({thousands: this.state.thousands + 1});
    }

    removeThousands = () => {
        if(this.state.thousands > 0) this.setState({thousands: this.state.thousands - 1});
    }

    getResult = () => this.state.units + (this.state.tens * 10) + (this.state.hundreds * 100) + (this.state.thousands * 1000);

    render() {
        const { children } = this.props
        const {
            addUnits,
            addTens,
            addHundreds,
            addThousands,
            removeUnits,
            removeTens,
            removeHundreds,
            removeThousands
        } = this

        return (
            <RootContext.Provider value={{
                ...this.state,
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
}

export default RootContext

export {RootProvider}