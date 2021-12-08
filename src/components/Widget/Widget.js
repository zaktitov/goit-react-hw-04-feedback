import React from 'react';
import s from './Widget.module.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptins from '../FeedbackOptions/FeedbackOptions';
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

  increaseNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  increaseBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  increaseGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    let total = good + bad + neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100,
    );

    return positivePercentage;
  };

  render() {
    return (
      <div className={s.wrapper}>
        <Section title={'Please leave feedback 👍'}>
          <FeedbackOptins
            badIncrement={this.increaseBad}
            neutralIncrement={this.increaseNeutral}
            goodIncrement={this.increaseGood}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() === 0 ? (
            <NoFeedback message={'No feedback given 😥'} />
          ) : (
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
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
