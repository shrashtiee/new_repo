import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Root from './Root';
import {checkNetwork} from '../modules';
import SplashScreen from 'react-native-splash-screen';

const AppNavigator = ({dispatch}) => {
  useEffect(() => {
    SplashScreen.hide();
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    NetInfo.fetch().then(state => {
      const isConnected = state?.isConnected;
      handleConnectivityChange(isConnected === undefined ? true : isConnected);
    });

    const unsubscribe = NetInfo.addEventListener(state => {
      handleConnectivityChange(state?.isConnected);
    });

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      unsubscribe();
    };
  });


  /**
   * Method calls on android hardware back press.
   * Dispatched to previous screen if available.
   */
  const onBackPress = () => {
    return false;
  };

  /**
   * Method to check network connectivity.
   * @param isConnected
   */
  const handleConnectivityChange = isConnected => {
    dispatch(checkNetwork(isConnected));
  };

  return <Root />;
};

AppNavigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppNavigator);
