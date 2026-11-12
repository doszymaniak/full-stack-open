import { useState } from "react";

const Button = ({ onClick, name }) => <button onClick={onClick}>{name}</button>;

const StatisticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Statistics = ({ good, neutral, bad }) => {
  if (good == 0 && neutral == 0 && bad == 0) return <p>No feedback given</p>;
  const all = good + neutral + bad;
  const average = all == 0 ? 0 : (good - bad) / all;
  const positive = all == 0 ? 0 : (good / all) * 100;
  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} name="good" />
      <Button onClick={() => setNeutral(neutral + 1)} name="neutral" />
      <Button onClick={() => setBad(bad + 1)} name="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
