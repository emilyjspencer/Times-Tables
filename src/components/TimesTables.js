import React, { Component } from 'react';
import PropTypes from 'prop-types';



class TimesTables extends Component {
    render() {
        const maths = this.props.maths.map((math, i) => <li key={i}>{math}</li>);
        const img = this.props.img;

        return(
            <div className="TimesTable">
                <h2>{this.props.title}</h2>
                <h3>Maths</h3>
                <div class="flex-container">
                <ul>
                    {maths}
                    <h3>{this.props.img}</h3>
                </ul>
                
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