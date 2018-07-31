import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class MapContainer extends Component {

    componentDidUpdate() {
        this.loadMap(); // call loadMap function to load the google map
    }

    loadMap() {
        if (this.props && this.props.google) { // checks to make sure that props have been passed
            const { google } = this.props; // sets props equal to google
            const maps = google.maps; // sets maps to google maps props

            const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
            const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

            const mapConfig = Object.assign({}, {
                center: { lat: 43.65838, lng: -79.44335 }, 
                zoom: 8,
                mapTypeId: 'roadmap'
            })

            this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

            this.props.locations.forEach(location => { // iterate through locations saved in state
                console.log(location);

                let contentString = "<h2>" + location.name + " LCBO, " 
                    + location.city + 
                    "</h2> <p>Cases Left: <strong> " + location.quantity + 
                    " </strong ></p> <p>Distance: " + (location.distance_in_meters / 1000)  + "KM</p>";

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                const marker = new google.maps.Marker({
                    position: { lat: location.latitude, lng: location.longitude }, 
                    map: this.map,
                    title: location.name 
                });

                marker.addListener('click', function () {
                    infowindow.open(this.map, marker);
                });

                this.map.addListener('click', function () {
                    infowindow.close();
                });
            })
        }
    }

    render() {
        const style = { 
            width: '100vw', 
            height: '40vh',
            minHeight: '450px'
        }

        return (
            <div ref="map" style={style}>
                loading map...
            </div>
        )
    }
}
