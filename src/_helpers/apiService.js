import axios from 'axios';
import {notification} from 'antd';
import {LOGOUT} from '../_context/actions';

const apiService = {
  get: async ({intoken = true, url, dispatch}) => {
    const token = localStorage.getItem('token');
    let obj = {url, method: 'get'};

    if (intoken && token) {
      obj = {...obj, headers: {Authorization: `Bearer ${token}`}};
    }

    try {
      const res = axios.get(obj);
      if (res) return res;
      return null;
    } catch (e) {
      printError(e, dispatch);
    }
  },
  post: async ({intoken = true, url, data, dispatch}) => {
    const token = localStorage.getItem('token');
    let obj = {url, method: 'post', data};

    if (intoken && token) {
      obj = {...obj, headers: {Authorization: `Bearer ${token}`}};
    }

    try {
      const res = await axios(obj);
      if (res) return res;
      return null;
    } catch (e) {
      printError(e, dispatch);
    }
  },
  delete: async ({intoken = true, url, dispatch}) => {
    const token = localStorage.getItem('token');
    let obj = {url, method: 'delete'};

    if (intoken && token) {
      obj = {...obj, headers: {Authorization: `Bearer ${token}`}};
    }

    try {
      const res = await axios(obj);
      if (res) return res;
      return null;
    } catch (e) {
      printError(e, dispatch);
    }
  },
  patch: async ({intoken = true, url, data, dispatch}) => {
    const token = localStorage.getItem('token');
    let obj = {url, method: 'patch', data};

    if (intoken && token) {
      obj = {...obj, headers: {Authorization: `Bearer ${token}`}};
    }

    try {
      const res = await axios(obj);
      if (res) return res;
      return null;
    } catch (e) {
      printError(e, dispatch);
    }
  },
};

const printError = (error, dispatch) => {
  if (error.response) {
    // client received an error response (5xx, 4xx)

    notification.error({
      message: error.response.status,
      description: error.response.data.error,
    });
    if (error.response.status === 401) {
      dispatch({type: LOGOUT});
      // window.location.replace("/signin");
    }
  } else if (error.request) {
    // client never received a response, or request never left
    notification.error({
      message: 'Opps..',
      description: 'Something went wrong...',
    });
  } else {
    // anything else
    notification.error({
      message: 'Opps..',
      description: 'Something went wrong...',
    });
  }

};

export {apiService};
