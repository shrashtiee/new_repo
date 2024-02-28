import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResultView from "./view";

const ResultScreen = (props) => {
    const { navigation, route } = props;
    const { score, answers } = route.params

    const handleHome = () => {
        navigation.navigate('HomeScreen')
    }

    const handleBackButton = () => {
        navigation.goBack();
    }
    return (
        <ResultView
            handleBackButton={handleBackButton}
            score={score}
            handleHome={handleHome}
            answers={answers}
            route={route}
        />
    );
}
ResultScreen.navigationOptions = () => ({
});

ResultScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    // Access state from Store.
});

export default connect(mapStateToProps)(ResultScreen);
