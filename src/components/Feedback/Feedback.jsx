import { useState } from 'react';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return good ? Math.floor((good / total) * 100) : 0;
  };

  const handleButtonClick = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleButtonClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default Feedback;
