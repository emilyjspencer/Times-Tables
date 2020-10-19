import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../TimesTables.css';



class TimesTables extends Component {
    render() {
        const img = this.props.img;
        const maths = this.props.maths.map((math, i) => <li key={i}>{math}</li>);
        
        return(
            <div className="TimesTable">
                <h2>{this.props.title}</h2>
                <div className="flex-container">
                  <h3>{img}</h3>
                  <h2>{maths}</h2>
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