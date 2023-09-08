import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  handleClick = e => {
    this.props.getFeedbacks(e.target.name);
  };

  render() {
    return (
      <div className={css.wrapper}>
        <button className={css.btn} name="good" onClick={this.handleClick}>
          Good
        </button>
        <button className={css.btn} name="neutral" onClick={this.handleClick}>
          Neutral
        </button>
        <button className={css.btn} name="bad" onClick={this.handleClick}>
          Bad
        </button>
      </div>
    );
  }
}
