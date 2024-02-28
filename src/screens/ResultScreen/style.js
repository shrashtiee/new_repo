import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../utility/colorConstant';
import Fonts from '../../utility/fonts';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.BLACK_COLOR,
    fontSize: 16,
    fontFamily: Fonts.MEDIUM,
    paddingHorizontal: 10
  },
  topContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 20
  },
  scoreCardText: {
    color: Colors.BLACK_COLOR,
    fontSize: 18,
    fontFamily: Fonts.MEDIUM,
    textAlign: "center",
    marginTop: 8,
  },
  itemStyle: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    paddingHorizontal: 10
  },
  vectorIconStyle: {
    marginLeft: 10
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
  mainContainer: {
    backgroundColor: Colors.WHITE_COLOR,
    flex: 1,
  },
  scoreCardView: {
    borderRadius: 7,
    marginTop: 20,
  },
  scoreCardStyle:{
    width: deviceWidth,
    height: 100,
    resizeMode:'contain',
    marginBottom: 30
  }
});

export default styles;