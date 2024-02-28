import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuizView from "./view";

const QuizScreen = (props) => {
  const { navigation } = props;
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([])
  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [counter, setCounter] = useState(20);
  let interval = null;
  const totalQuestions = quizQuestions?.length;
  const progressPercentage = Math.floor((ques / totalQuestions) * 100);


  useEffect(() => {
    getQuiz();
  }, []);


  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options)
    return options
  }

  const getQuiz = async () => {
    setIsLoading(true)
    const url = `https://opentdb.com/api.php?amount=10&type=multiple`;
    const res = await fetch(url);
    const data = await res.json();
    setQuizQuestions(data?.results);
    setOptions(generateOptionsAndShuffle(data?.results[0]))
    setIsLoading(false)
  };

  const handleNextPress = () => {
    setQues(ques + 1)
    setOptions(generateOptionsAndShuffle(quizQuestions[ques + 1]))
  }

  const handlSelectedOption = (_option) => {
    if (_option === quizQuestions[ques].correct_answer) {
      setScore(score + 10)
      setAnswerStatus(true);
      setCounter(20);
      answers.push({ question: ques + 1, answer: true });
    } else {
      setAnswerStatus(false);
      setCounter(20);
      answers.push({ question: ques + 1, answer: false });
    }
    if (ques !== 9) {
      setQues(ques + 1)
      setOptions(generateOptionsAndShuffle(quizQuestions[ques + 1]))
      setCounter(20);
    }
    if (ques === 9) {
      handleShowResult()
    }
  }

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((state) => state - 1);
      }
      if (counter === 0 && ques !== 9) {
        setQues(ques + 1)
        setOptions(generateOptionsAndShuffle(quizQuestions[ques + 1]))
        setIndex(ques + 1);
        setCounter(20);
      }
      if (counter === 0 && ques === 9) {
        setIndex(ques + 1);
        setCounter(20);
        handleShowResult();
      }
    };
    interval = setTimeout(myInterval, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (ques + 1 > quizQuestions && quizQuestions?.length) {
      clearTimeout(interval)
      handleShowResult();
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(20);
    }
  }, [index]);

  const handleShowResult = () => {
    navigation.navigate('ResultScreen', {
      score: score,
      answers: answers,
      points: points
    })
  }

  const handleNextQues = () => {
    setIndex(ques + 1);
    setQues(ques + 1)
    setOptions(generateOptionsAndShuffle(quizQuestions[ques + 1]))
  }

  const handleBackButton = () => {
    navigation.goBack();
  }
  return (
    <QuizView
      handleBackButton={handleBackButton}
      quizQuestions={quizQuestions}
      options={options}
      handleNextPress={handleNextPress}
      handleShowResult={handleShowResult}
      ques={ques}
      handlSelectedOption={handlSelectedOption}
      isLoading={isLoading}
      answerStatus={answerStatus}
      counter={counter}
      index={index}
      progressPercentage={progressPercentage}
      totalQuestions={totalQuestions}
      handleNextQues={handleNextQues}
    />
  );
}
QuizScreen.navigationOptions = () => ({
});

QuizScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // Access state from Store.
});

export default connect(mapStateToProps)(QuizScreen);
