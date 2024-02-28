import React from "react";
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from "./style";
import icons from "../../utility/icons";

const HomeView = (props) => {
  const { handleQuiz } = props;

  return (
    <View style = {styles.mainContainer}>
      <View style={styles.imageView}>
        <Image
          style={styles.imageStyle}
          source={icons.QUIZ_ICON}
        />
      </View>

      {/* <View style={{ padding: 10 }}>
        <Text
          style={{
            textAlign: "center",
            color: "magenta",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          QUIZ RULES
        </Text>
      </View> */}

      {/* <View
        style={{
          padding: 10,
          backgroundColor: "#F88379",
          borderRadius: 6,
          marginTop: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>•</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722F37",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            For each correct answer you get 5 points
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>•</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722F37",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            There is no negative marking for wrong answer
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>•</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722F37",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            Each question has a time limit of 15 sec
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>•</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722F37",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            You should answer all the questions compulsarily
          </Text>
        </View>
      </View> */}
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={handleQuiz}
          style={styles.startButtonStyle}
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HomeView);