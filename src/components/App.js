import React, { Component } from 'react';

import TimesTables from './TimesTables';
import Nav from './Nav';
import Header from './Header';
import Quiz from './Quiz';
import Woody from './woody.jpg';
import Cinderella from './cinderella.jpg';
import Hercules from './hercules.jpg';
import Moana from './moana3.jpg';
import Mickey from './mickey.jpg';
import Elsa from './elsa2.jpg';
import Olaf from './olaf.jpg';
import Flynn from './flynn.jpg';
import Ariel from './ariel.jpg';
import Maleficient from './maleficient.jpg';
import Naveen from './naveen.jpg';
import Belle from './belle.jpg';
import Test from './test.png';
import Simba from './simba.jpg';
import Aladdin2 from './aladdin2.jpg';
import Aladdin from './aladdin.jpg';
import Buzz from './buzz.jpg';
import EricAriel from './ericariel.jpg';


import '../App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.chooseATimesTable = this.chooseATimesTable.bind(this);

      this.state = {
        timestables: [

          {
            title: 'One Times Table',
            maths: [
              '1 X 1 = 1',
              '2 X 2 = 2',
              '3 X 2 = 3',
              '4 X 1 = 4',
              '5 X 1 = 5',
              '6 X 1 = 6',
              '7 X 1 = 7',
              '8 X 1 = 8',
              '9 X 1 = 9',
              '10 X 1 = 10',
              '11 X 1 = 11',
              '12 X 1 = 12'
            ],
            id : 'one',
            img: <img src={Olaf} alt="olaf" />,
          },
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
          id : 'two',
          img: <img src={Hercules} alt="hercules" />
        },
        {
          title: 'Three Times Table',
          maths: [
            '1 X 3 = 3',
            '2 X 3 = 6',
            '3 X 3 = 9',
            '4 X 3 = 12',
            '5 X 3 = 15', 
            '6 X 3 = 18',
            '7 X 3 = 21',
            '8 X 3 = 24',
            '9 X 3 = 27',
            '10 X 3 = 30',
            '11 X 3 = 33',
            '12 X 3 = 36'
          ],
          id : 'three',
          img: <img src={Cinderella} alt="cinderella" />
        },
        {
          title: 'Four Times Table',
          maths: [
            '1 X 4 = 4',
            '2 X 4 = 8',
            '3 X 4 = 12',
            '4 X 4 = 16',
            '5 X 4 = 20', 
            '6 X 4 = 24',
            '7 X 4 = 28',
            '8 X 4 = 32',
            '9 X 4 = 36',
            '10 X 4 = 40',
            '11 X 4 = 44',
            '12 X 4 = 48'
          ],
          id : 'four',
          img: <img src={Woody} />
        },
        {
          title: 'Five Times Table',
          maths: [
            '1 X 5 = 5',
            '2 X 5 = 10',
            '3 X 5 = 15',
            '4 X 5 = 20',
            '5 X 5 = 25', 
            '6 X 5 = 30',
            '7 X 5 = 35',
            '8 X 5 = 40',
            '9 X 5 = 45',
            '10 X 5 = 50',
            '11 X 5 = 55',
            '12 X 5 = 60'
          ],
          id : 'five',
          img: <img src={Elsa} alt="elsa"/>
        },
        {
          title: 'Six Times Table',
          maths: [
            '1 X 6 = 6',
            '2 X 6 = 12',
            '3 X 6 = 18',
            '4 X 6 = 24',
            '5 X 6 = 30', 
            '6 X 6 = 36',
            '7 X 6 = 42',
            '8 X 6 = 48',
            '9 X 6 = 54',
            '10 X 6 = 60',
            '11 X 6 = 66',
            '12 X 6 = 72'
          ],
          id : 'six',
          img: <img src={Moana} />
        },
        {
          title: 'Seven Times Table',
          maths: [
            '1 X 7 = 7',
            '2 X 7 = 14',
            '3 X 7 = 21',
            '4 X 7 = 28',
            '5 X 7 = 35', 
            '6 X 7 = 42',
            '7 X 7 = 49',
            '8 X 7 = 56',
            '9 X 7 = 63',
            '10 X 7 = 70',
            '11 X 7 = 77',
            '12 X 7 = 84'
          ],
          id : 'seven',
          img: <img src={Mickey}  alt="mickey"/>
        },
        {
          title: 'Eight Times Table',
          maths: [
            '1 X 8 = 8',
            '2 X 8 = 16',
            '3 X 8 = 24',
            '4 X 8 = 32',
            '5 X 8 = 40', 
            '6 X 8 = 48',
            '7 X 8 = 56',
            '8 X 8 = 64',
            '9 X 8 = 72',
            '10 X 8 = 80',
            '11 X 8 = 88',
            '12 X 8 = 96'
          ],
          id : 'eight',
          img: <img src={Maleficient} alt="maleficient" />
        },
        {
          title: 'Nine Times Table',
          maths: [
            '1 X 9 = 9',
            '2 X 9 = 18',
            '3 X 9 = 27',
            '4 X 9 = 36',
            '5 X 9 = 45', 
            '6 X 9 = 54',
            '7 X 9 = 63',
            '8 X 9 = 72',
            '9 X 9 = 81',
            '10 X 9 = 90',
            '11 X 9 = 99',
            '12 X 9 = 108'
          ],
          id : 'nine',
          img: <img src={Flynn}  alt="flynn" />
        },
        {
          title: 'Ten Times Table',
          maths: [
            '1 X 10 = 10',
            '2 X 10 = 20',
            '3 X 10 = 30',
            '4 X 10 = 40',
            '5 X 10 = 50', 
            '6 X 10 = 60',
            '7 X 10 = 70',
            '8 X 10 = 80',
            '9 X 10 = 90',
            '10 X 10 = 100',
            '11 X 10 = 110',
            '12 X 10 = 120'
          ],
          id : 'ten',
          img: <img src={Ariel}  alt="ariel" />
        },
        { 
          title: 'Eleven Times Table',
          maths: [
            '1 X 11 = 11',
            '2 X 11 = 22',
            '3 X 11 = 33',
            '4 X 11 = 44',
            '5 X 11 = 55',
            '6 X 11 = 66',
            '7 X 11 = 77',
            '8 X 11 = 88',
            '9 X 11 = 99',
            '10 X 11 = 110',
            '11 X 11 = 121',
            '12 X 11 = 122'
          ],
          id: 'eleven',
          img: <img src={Naveen} alt="princenaveen" />
        },
        {
          title: 'Twelve Times Table',
          maths: [
            '1 X 12 = 12',
            '2 X 12 = 24',
            '3 X 12 = 36',
            '4 X 12 = 48',
            '5 X 12 = 60', 
            '6 X 12 = 72',
            '7 X 12 = 84',
            '8 X 12 = 96',
            '9 X 12 = 108',
            '10 X 12 = 120',
            '11 X 12 = 132',
            '12 X 12 = 148'
          ],
          id : 'twelve',
          img: <img src={Belle} alt="belle" />
          
        },
        {
        title: 'Quiz',
        img: <img src={Test} alt="test" />
        }

      ],
      chosenTimesTable: null,
      chosenTimesTableImage: null
        
      }
  }

  chooseATimesTable(timesTableId) {
    if(timesTableId) { // if id exists update the state - cant manipulate state directly
      this.setState({
        ...this.state,
        chosenTimesTable: timesTableId
      });
    }
  }


  render() {
    let timesTableToChoose;
    if(this.state.chosenTimesTable) { 
      const filteredTimesTables = this.state.timestables.filter((timestable) => timestable.id === this.state.chosenTimesTable);  
      if(filteredTimesTables.length > 0) { 
        timesTableToChoose = filteredTimesTables[0];
      }
    }let timesTableImageToChoose;
    if(this.state.chosenTimesTableImage) { 
      const filteredTimesTables = this.state.timestables.filter((timestable) => timestable.id === this.state.chosenTimesTableImage);  
      if(filteredTimesTables.length > 0) { 
        timesTableImageToChoose = filteredTimesTables[0];
      }
    }

    return (
      <div className="App">
        <Header />
        <div id="learn"><strong>Learn your Times Tables with Disney Characters</strong></div>
        <Nav
        timestables={this.state.timestables}
        activeTimesTable={this.state.chosenTimesTable}
        timesTableToChoose={this.chooseATimesTable}
        />
        
        { 
          timesTableToChoose ? 
            <TimesTables
              title={timesTableToChoose.title} 
              img={timesTableToChoose.img}  className="image"
              maths={timesTableToChoose.maths}
              
              
            />
          :
          null
        }
      </div>
    );
  }

 

  componentDidMount() {
    const timesTableToShow = this.state.timestables[0].id || null;
    const imageToShow = this.state.timestables[0].img || null;
    this.setState({
      ...this.state,
      chosenTimesTable: timesTableToShow
      
    });
  }
  
}

export default App;