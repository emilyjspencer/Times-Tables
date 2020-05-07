import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.changeTimesTable = this.changeTimesTable.bind(this);
  }

  changeTimesTable(e) {
    const buttonId = e.target.id;
    const timesTableId = buttonId.split('_')[0];
    this.props.timesTableToChoose(timesTableId);
  }
  render() {
    return (
      <div className="Navigation">
        <ul>
          {
            this.props.timestables.map((timestable) => 
              <button 
                id={timestable.id + '_button'} 
                key={timestable.id}
                onClick={this.changeTimesTable}
              >
                {timestable.title}
              </button>
            )
          }
        </ul>
      </div>
    );
  }
}

Nav.propTypes = {
  timestables: PropTypes.array.isRequired,
  timesTableToChoose: PropTypes.func.isRequired
};

export default Nav;
