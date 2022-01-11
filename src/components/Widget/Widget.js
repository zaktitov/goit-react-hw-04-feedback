import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Widget.module.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import NoFeedback from '../NoFeedback/NoFeedback';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    option === 'good' && setGood(prevState => prevState + 1);
    option === 'neutral' && setNeutral(prevState => prevState + 1);
    option === 'bad' && setBad(prevState => prevState + 1);
  };

  const feedbackOptions = { good, neutral, bad };

  const countTotalFeedback = () =>
    Object.values(feedbackOptions).reduce((acc, curr) => acc + curr);

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const getStatisticsOptions = () => [
    ...Object.entries(feedbackOptions),
    ['total', countTotalFeedback()],
    ['positive feedback', countPositiveFeedbackPercentage() + '%'],
  ];

  return (
    <div className={s.wrapper}>
      <Section>
        <FeedbackOptions
          options={Object.keys(feedbackOptions)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      {countTotalFeedback() === 0 &&
      isNaN(countPositiveFeedbackPercentage()) ? (
        <NoFeedback message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics options={getStatisticsOptions()} />
        </Section>
      )}
    </div>
  );
}
App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
