export let navigationDispatchService;

import {CommonActions} from '@react-navigation/native';

import Constant from './constant';

// Function to return the proper error
export function fetchErrorMessage(error) {
  if (
    (error.response && error.response.status === Constant.HTTP_ERROR_CODE) ||
    (error.response && error.response.status === Constant.SERVER_NOT_FOUND)
  ) {
    return Constant.REQ_FAILED;
  } else if (
    error.response &&
    error.response.status === Constant.UNAUTHORIZED_ACCESS_CODE
  ) {
    return Constant.UNAUTHORIZED_ACCESS_CODE;
  }
  return error.response && error.response.data
    ? error.response.data.error.message
    : Constant.NETWORK_ERROR;
}

// Function to navigate to screen

export function navigateToScreen(route) {
  const navigationAction = CommonActions.navigate({
    name: route,
  });
  navigationDispatchService(navigationAction);
}
