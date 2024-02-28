import React from "react";
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import styles from "./style";
import { ScreenHeader } from "../../components";

const QuizView = (props) => {
  const { quizQuestions,
    isLoading,
    options,
    ques,
    handleNextPress,
    handleShowResult,
    handlSelectedOption,
    answerStatus,
    index,
    progressPercentage,
    totalQuestions,
    counter,
    handleNextQues,
    handleBackButton } = props;
    console.log('quizQuestions',quizQuestions[ques]?.correct_answer)

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScreenHeader
        headerTitle={'QUIZ'}
        handleBackButton={handleBackButton}
      />
      <View
        style={styles.topContainerStyle}
      >
        <TouchableOpacity
          style={styles.timerViewStyle}>
          <Text style={styles.timerTextStyle}>
            Timer:  {counter} secs Left
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "#ADD8E6",
          flexDirection: "row",
          alignItems: "center",
          height: 10,
          borderRadius: 20,
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10
        }}
      >
        <Text
          style={{
            backgroundColor: "#239ED0",
            borderRadius: 12,
            position: "absolute",
            left: 0,
            height: 10,
            right: 0,
            width: `${progressPercentage}%`,
            marginTop: 20,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <Text style={styles.totalQuesText}>Your Progress</Text>
        <Text style={styles.totalQuesText}>
          ({ques}/{totalQuestions})
          questions answered
        </Text>
      </View>

      {isLoading ? <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Text style={{ fontSize: 32, fontWeight: '700' }}>LOADING...</Text>
      </View> : quizQuestions && (
        <View style={styles.questionView}>
          <Text style={styles.questionTextStyle}>{quizQuestions[ques]?.question}</Text>
          <View style={{ marginTop: 12 }}>
            <TouchableOpacity onPress={() => handlSelectedOption(options[0])}>
              <Text 
              style={styles.optionTextStyle}>{options[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlSelectedOption(options[1])}>
              <Text style={styles.optionTextStyle}>{options[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlSelectedOption(options[2])}>
              <Text style={styles.optionTextStyle}>{options[2]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlSelectedOption(options[3])}>
              <Text style={styles.optionTextStyle}>{options[3]}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={
              answerStatus === null
                ? null
                : {
                  marginTop: 45,
                  padding: 10,
                  borderRadius: 7,
                  height: 120,
                }
            }
          >
            {answerStatus === null ? null : (
              <Text
                style={
                  answerStatus == null
                    ? null
                    : { fontSize: 18, textAlign: "center", fontWeight: "bold" }
                }
              >
                {!!answerStatus ? "Correct Answer" : "Wrong Answer"}
              </Text>
            )}

            {ques + 1 >= quizQuestions.length ? (
              <TouchableOpacity
                onPress={handleShowResult}
                style={styles.button}>
                <Text style={styles.buttonText}>Done</Text>
              </TouchableOpacity>
            ) : answerStatus === null ? null : (
              <TouchableOpacity
                onPress={handleNextQues}
                style={styles.button}>
                <Text style={styles.buttonText}>Next Question</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )
    }
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(QuizView);