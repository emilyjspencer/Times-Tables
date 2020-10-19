import React from 'react';

import { quizData } from './quizData';


class Quiz extends React.Component  {

    constructor(props) {
        super(props)

        this.state = {
            index: 0,
            end: false,
            userAnswer: null,
            score: 0,
            disabled: true,
            options: []
        }
    }

    

  loadQuestion = () => {
    
    const { index } = this.state;
  
    this.setState(() => {
        return {
          options: quizData[index].options,
          answer: quizData[index].answer,
          question: quizData[index].question  
        }
    })
};


  componentDidMount() {
    this.loadQuestion()
  }


  render() {
      return (
     <h1>Test what you've learned with this quiz</h1>

      )
  
      }


}



export default Quiz;