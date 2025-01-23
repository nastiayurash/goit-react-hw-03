
import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import './App.css'

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
   
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
   

  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className="container">
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        feedback={feedback}  
      />
      {totalFeedback > 0 ? (
        <Feedback
          total={totalFeedback}
          positive={positiveFeedback}
          good={feedback.good}   
          neutral={feedback.neutral} 
          bad={feedback.bad}      
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};


export default App;



