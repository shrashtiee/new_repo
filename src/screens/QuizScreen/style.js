import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../utility/colorConstant';
import Fonts from '../../utility/fonts';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  topContainerStyle: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    padding: 10,
  },
  optionTextStyle: {
    borderColor: Colors.BUTTON_COLOR,
    textAlign: "center",
    borderWidth: 0.5,
    height: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    padding: 10,
    marginTop: 10,
    marginHorizontal: 10,
    color: Colors.BLACK_COLOR,
    fontSize: 14,
    fontFamily: Fonts.MEDIUM,
  },
  button: {
    backgroundColor: Colors.BUTTON_COLOR,
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
    marginVertical: 20,
    width: deviceWidth * 0.75,
    alignSelf: 'center'
  },
  buttonText: {
    color: Colors.WHITE_COLOR,
    fontSize: 18,
    fontFamily: Fonts.MEDIUM
  },
  bottom: {
    marginTop: 40,
    paddingVertical: 16,
    alignContent: 'center'
  },
  answerStyle: {
    fontSize: 18,
    textAlign: 'center'
  },
  textStyle: {
    color: Colors.BLACK_COLOR,
    fontSize: 16,
    fontFamily: Fonts.MEDIUM
  },
  totalQuesText: {
    color: Colors.BLACK_COLOR,
    fontSize: 14,
    fontFamily: Fonts.MEDIUM
  },
  timerTextStyle: {
    color: Colors.WHITE_COLOR,
    fontSize: 16,
    fontFamily: Fonts.MEDIUM
  },
  questionView: {
    marginTop: 30,
    borderRadius: 6,
    paddingHorizontal:10
  },
  timerViewStyle: { padding: 10, backgroundColor: Colors.BUTTON_COLOR, borderRadius: 20 },
  mainContainer: {
    backgroundColor: Colors.WHITE_COLOR,
    flex: 1,
  },
  questionTextStyle:{
    color: Colors.BLACK_COLOR,
    fontSize: 16,
    fontFamily: Fonts.MEDIUM,
    paddingHorizontal:10
  }
});

export default styles;