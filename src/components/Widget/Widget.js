import React from 'react';
import s from './Widget.module.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import NoFeedback from '../NoFeedback/NoFeedback';

class Widget extends React.Component {
  static defaultProps = {
    good: 0,
    bad: 0,
    neutral: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  onOptionChange = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    let total = good + bad + neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage =
      Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%';

    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <div className={s.wrapper}>
        <Section title={'Please leave feedback 👍'}>
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.onOptionChange}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <NoFeedback message={'No feedback given 😥'} />
          ) : (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Widget;
