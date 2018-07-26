import React, { Component } from 'react';
import logo from './logo.svg';
import { GoogleApiWrapper } from 'google-maps-react'
import './App.css';
import MapContainer from './MapContainer'

class App extends Component {
    constructor() {
        super();
        this.state = {
            stores: [],
            locations: [],
            prodID: '460881',
        }

        this.updateList = this.updateList.bind(this);
    }

    getStores(prodID) {
        fetch('https://lcboapi.com/stores?access_key=MDpiYTFjODVhNi1iMDY4LTExZTctOGNhMS0yYjM2ZTNlMDFjY2E6c2J4eVVBVWdFbk1zNUhvUG9ralQ3ZmQ3N2Q1N0FOYzBZY0RL&lat=43.65838&lon=-79.44335&product_id=' + prodID)
            .then(results => {
                return results.json();
            }).then(data => {
                let stores = data.result.map((store) => {
                    return (
                        <li>
                            <h1>{store.name}</h1>
                            <h2>{store.city}, <small>{store.address_line_1} {store.address_line_2} </small> </h2>
                            <p className="cases">Cases Left: {store.quantity}</p>
                        </li>
                    )
                })
                this.setState({ stores: stores })
                this.setState({ locations: data.result })
            })
    }

    componentDidMount() {
        this.getStores(this.state.prodID);
    }

    updateList(event) {
        var newProdID = event.target.value;
        this.setState({ prodID: newProdID, stores: [] });
        this.getStores(newProdID);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">OV Finder - Just Say OV</h1>
                </header>

                <MapContainer locations={this.state.locations} google={this.props.google} />


                <ul className="store-list">
                    <br />
                    <br /><br />
                    <h2>Select Your Case:</h2>
                    <select onChange={this.updateList} value={this.state.prodID}>
                        <option id="460881" value="460881">6 Case - Tall Cans</option>
                        <option id="900365" value="900365">12 Case - Bottles</option>
                        <option id="360446" value="360446">15 Case - Cans</option>
                        <option id="902056" value="902056">24 Case - Bottles</option>
                    </select>
                    {this.state.stores}
                </ul>
            </div>
        );
    }
}

// export default App;
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBE2vcZEr-EcYBbDwfklzYrf8L0cPi9U2k',
})(App)


