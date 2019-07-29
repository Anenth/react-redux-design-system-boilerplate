// @flow
import axios from 'axios';
import { get as lodashGet } from 'lodash';
import { logError } from '../services/ErrorTracker';
import { getCache } from './LocalCacheUtils';

function getConfig() {
  return {
    headers: {
      Authorization: `MPIN ${getCache('MPIN') || 0}`,
      'Magic-token': getCache('auth_token'),
    },
  };
}

export function get(url: string, params?: {}, ignoreError: boolean = true) {
  return axios
    .get(url, { ...params, ...getConfig() })
    .catch(error => handleError(error, ignoreError));
}

export function post(url: string, params: {}) {
  return axios.post(url, params, getConfig());
}

export function put(url: string, params: {}) {
  return axios.put(url, params, getConfig());
}

function handleError(error, ignoreError: boolean) {
  const { response } = error;
  if (!ignoreError) {
    logError(response);
    // eslint-disable-next-line
    alert(`Something when wrong! ${lodashGet(response, 'message', error)}`);
  }

  return Promise.reject(response || error);
}
