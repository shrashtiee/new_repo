import React from "react";
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image
} from 'react-native';
import styles from "./style";
import { ScreenHeader, VectorIcon } from "../../components";
import icons from "../../utility/icons";

const ResultView = (props) => {
  const { handleHome, route , handleBackButton} = props;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScreenHeader
        headerTitle={'Results'}
        handleBackButton={handleBackButton}
      />
      <View
        style={styles.topContainerStyle}>
        <Text style={styles.textStyle}>Questions Answered</Text>
        <Text style={styles.textStyle}>(10/10)</Text>
      </View>
      <TouchableOpacity
        style={styles.scoreCardView}>
          <Image
            source={icons.SCORE_ICON}
            style = {styles.scoreCardStyle}
          />
        <FlatList
          numColumns={2}
          data={route.params.answers}
          renderItem={({ item, i }) => (
            <View
              style={styles.itemStyle}
            >
              <Text style={styles.textStyle}>{item.question}</Text>
              {item.answer === true ? (
                <VectorIcon
                  iconName={'check-circle'}
                  iconSize={20}
                  color={'#009E60'}
                  style={styles.vectorIconStyle}
                />
              ) : (
                <VectorIcon
                  iconName={'close'}
                  iconSize={20}
                  color={'#FF0000'}
                  style={styles.vectorIconStyle}
                />
              )}
            </View>
          )}
        />
        <TouchableOpacity
          onPress={handleHome}
          style={styles.button}>
          <Text style={styles.buttonText}>OVER</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ResultView);