import React, { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './Feedback/Statistics/Statistics';
import Section from './Feedback/Section/Section';
import Notification from './Feedback/Notification/Notification';
import Container from './Feedback/Container/Container';

export const App = () => {
  return (
    <Container>
      <Feedback />
    </Container>
 
  );
};

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad
  };

  countPositiveFeedback = () => {
    const {good, neutral, bad} = this.state;
    const total =  good + neutral + bad;
    return Math.round((good/total) * 100);
  };

  addFeedback = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalCount = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedback();
    const options = Object.keys(this.state);

    return (
      <>
        <div>
          <Section title="Please, leave your feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.addFeedback}
            />
          </Section>
          <Section title="Statistics" >
            {
              totalCount > 0 ? 
              (<Statistics 
                good={good} 
                neutral={neutral} 
                bad={bad} 
                total={totalCount} 
                positivePercentage={ positiveFeedback} />): (
                <Notification message="There is no feedback" />
              )
            }
            
          </Section>
        </div>
      </>
    );
  }
}
