import React, { Component } from "react";
import "./App.css";
import Section from "./Components/Section/Section";
import Notification from "./Components/Notification/Notification";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Statistics from "./Components/Statistics/Statistics";
import s from './Components/Section/Section.module.css'




export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };



  goodIncr = () => {
    this.setState(
      (prevState) => ({
        good: prevState.good + 1,
      }));
  };

  neutralIncr = () => {
    this.setState(
      (prevState) => ({
        neutral: prevState.neutral + 1,
     }));
  };

  badIncr = () => {
    this.setState(
      (prevState) => ({
        bad: prevState.bad + 1,
      }));
  };


   calculetTotalFeedback() {
    const {bad,good,neutral} = this.state
    return bad + good + neutral
  };

  countPositiveFeedbackPercentage(){
    const {good} = this.state
    return Math.round((good / this.calculetTotalFeedback()) * 100)
  }

  onLeaveFeedback= (option) => {
this.setState({
  [option]:this.state[option] +1
})
  }


  render() { 
    
    const {good, neutral, bad} = this.state;
    const total = this.calculetTotalFeedback()

    return (
      <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
        options={['good','neutral','bad']}
        onLeaveFeedback={this.onLeaveFeedback}
          />
          </Section>

          <Section title="Statistics">
        {!total&& <Notification message={"There is no feedback"} />}
        {total>=1&& (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.calculetTotalFeedback()}
            feadback={this.countPositiveFeedbackPercentage()}
          />
        )}  
      </Section>
      </div>
    );
  }
}
