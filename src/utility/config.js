import {Platform} from 'react-native';

export default {
  BASE_URL: 'http://45.79.103.182:3005/',
  GCM_SENDER_ID: '968563498622',
  BUG_SNAG_API_KEY: '98741a15c365d85123a218c2bbe75b69',
  API_KEY:
    Platform.OS === 'ios'
      ? '3c4afb4fd46352977647e980f67b7456'
      : '1b0b3ff9876a5bf1d33f9767a7489a6f',
  APP_RELEASE_STAGE: __DEV__ ? 'dev' : 'qa',
};
