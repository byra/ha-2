import {actionTypes} from '../config/types';

export  const start = (payload) => {
  return {type: actionTypes.START, payload:payload}
};

export const save = () => {
    return { type: actionTypes.SAVE }
};

export const status = (payload) => {
    return { type: actionTypes.STATUS, payload:payload }
};

export const adult = (payload) => {
    return { type: actionTypes.PEOPLE, payload:payload }
};

export const children = (payload) => {
    return { type: actionTypes.PEOPLE, payload:payload }
};
