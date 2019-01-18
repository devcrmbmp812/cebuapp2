/**
 * Created by Kash.C on 10/19/18.
 */

// @flow
export default {
  EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  MIN_PASSWORD_LENGTH: 6,
  CLIENT_ID: 'ffb12e79140e7b6597ba',
  CLIENT_SECRET: 'd07dadbce095325cebfc40a46eb467e906063927',
  BASE_HEADER: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data"
  },
  BASE_PAGE_LIMIT: 10,
  //API_ENDPOINT: 'http://192.168.10.109/api/',
  API_ENDPOINT: 'http://cebuboss.online/ciadmin/api/',
  LOGIN_SCREEN: 'Login',  
  SIGNUP_SCREEN: 'Signup',
  DRAWRESULT_SCREEN: 'DrawResult',
  REPOSITORY_LIST_SCREEN: 'RepositoriesList',
  REPOSITORY_DETAILS_SCREEN: 'RepositoryDetails',   
  HARDWARE_PRESS_EVENT:'hardwareBackPress',
}