import React, { Component } from 'react';
import "./TourList.scss"

import Tour from "../Tour/Tour"

import { TourData } from "../TourData"

class TourList extends Component {
    state = {
        tours: TourData
    }

    removeTour = id => {
        console.log(id);
        const { tours } = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        })
    };

    render() {
        const { tours } = this.state;
        
        return (
            <section className = "tour-list">
                {tours.map(tour => {
                    return (
                        <Tour key={ tour.id } tour={tour} removeTour = {this.removeTour}/>
                    )
                })}
                
            </section>
        );
    }
}

export default TourList;