import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from '../components/AppStyle.module.css';
class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  getFeedbacks = state => {
    return this.setState(prev => ({
      [state]: prev[state] + 1,
    }));
  };

  countTotalFeedbacks = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedbacks = this.countTotalFeedbacks();

    if (!totalFeedbacks) {
      return 0;
    }

    const positiveFeedbacks = (good / totalFeedbacks) * 100;
    return Math.round(positiveFeedbacks);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section className={css.title} title="Please leave feedback">
          <FeedbackOptions getFeedbacks={this.getFeedbacks} />
          {this.countTotalFeedbacks() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedbacks={this.countTotalFeedbacks}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
