import React, { Component } from 'react';


class TimesTables extends Component {
    render() {
        const maths = this.props.maths.map((math, i) => <li key={i}>{math}</li>);

        return(
            <div className="TimesTable">
                <h2>{this.props.title}</h2>
                <h3>Maths</h3>
                <ul>
                    {maths}
                </ul>
            </div>
        );
    }
    }





export default TimesTables 