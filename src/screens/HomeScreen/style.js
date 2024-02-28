import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../utility/colorConstant';
import Fonts from '../../utility/fonts';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: Colors.WHITE_COLOR
    },
    startButtonStyle: {
        backgroundColor: Colors.BUTTON_COLOR,
        padding: 14,
        width: deviceWidth * 0.75,
        borderRadius: 25,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
    },
    buttonText: {
        color: Colors.WHITE_COLOR,
        fontFamily: Fonts.BOLD,
        textAlign: "center",
        fontSize: 18
    },
    imageStyle:{ 
        height: '100%', 
        width: "100%", 
        resizeMode: "contain" 
    },
    imageView:{
        width: deviceWidth,
        height: deviceHeight * 0.7
    },
    buttonView: {
        height: deviceHeight * 0.3,
        alignItems:'center'   
    }
});

export default styles;