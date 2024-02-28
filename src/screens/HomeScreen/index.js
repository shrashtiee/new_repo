import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeView from "./view";

const HomeScreen = (props) => {
    const { navigation } = props;

    // useEffect(() => {
    //     const apiUrl = `https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple`;

    //     fetch(apiUrl)
    //       .then((res) => res.json())
    //       .then((response) => {
    //         // console.log('RES',response)
    //         // setOptions(response.trivia_categories);
    //       });
    //   }, []);

    const handleQuiz = () => {
        navigation.navigate('QuizScreen')
    }

    const handleBackButton = () => {
        navigation.goBack();
    }
    return (
        <HomeView
            handleBackButton={handleBackButton}
            handleQuiz={handleQuiz}
        />
    );
}
HomeScreen.navigationOptions = () => ({
});

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    // Access state from Store.
});

export default connect(mapStateToProps)(HomeScreen);
