import React, { Component } from 'react';
import css from './Section.module.css';

export default class Section extends Component {
  render() {
    return (
      <div className={css.section}>
        <h2 className={css.title}>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}
