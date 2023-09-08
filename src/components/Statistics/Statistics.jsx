import React, { Component } from 'react';
import css from './Statistic.module.css';
export default class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    const { countTotalFeedbacks, countPositiveFeedbackPercentage } = this.props;

    return (
      <>
        <div className={css.wrapper}>
          <h3>Statistics</h3>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
          </ul>
        </div>
        <p>Total: {countTotalFeedbacks()}</p>
        <p
          className={
            `${countPositiveFeedbackPercentage()}` >= 50 ? css.green : css.red
          }
        >
          Positive feedback: {countPositiveFeedbackPercentage()}%
        </p>
      </>
    );
  }
}
