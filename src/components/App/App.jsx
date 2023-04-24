import React, { Component } from 'react';
import { Container } from 'components/container/Container';
import { Section } from 'components/section/Section';



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }


 render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
    <Container >
      <Section title = "Please leave feedback"></Section>
      
    </Container>
    ) 

}
}