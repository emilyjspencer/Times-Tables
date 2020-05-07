import React, { Component } from 'react';

import TimesTables from './TimesTables';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        timestables: [
          {
          title: 'Two Times Table',
          maths: [
            '1 X 2 = 2',
            '2 X 2 = 4',
            '3 X 2 = 6',
            '4 X 2 = 8',
            '5 X 2 = 10', 
            '6 X 2 = 12',
            '7 X 2 = 14',
            '8 X 2 = 16',
            '9 X 2 = 18',
            '10 X 2 = 20',
            '11 X 2 = 22',
            '12 X 2 = 24'
          ],
          id : 2
        },
      ]
        
      }
  }

  render() {
    return (
      <div className="App">
        <h1>Learn your Times Tables with Barbie</h1>
        { 
          this.state.timestables.map((timestable, i) => 
            <TimesTables
              title={timestable.title} 
              maths={timestable.maths}
              key={i}
            />
          ) 
        }
      </div>
    );
  }
  
}

export default App;