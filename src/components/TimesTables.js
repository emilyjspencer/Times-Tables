import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Barbie from './barbieEngineer.jpg';


class TimesTables extends Component {
    render() {
        const maths = this.props.maths.map((math, i) => <li key={i}>{math}</li>);

        return(
            <div className="TimesTable">
                <h2>{this.props.title}</h2>
                <h3>Maths</h3>
                <div class="flex-container">
                <ul>
                    {maths}
                </ul>
                <img src={Barbie} />
                </div>
            </div>
        );
    }
    }


    TimesTables.propTypes = {
        maths: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
      };


export default TimesTables 