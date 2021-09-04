/* eslint-disable import/no-anonymous-default-export */
import actionTypes from '../actionTypes';

export default {
  setInputTitle: title => ({
    type: actionTypes.SET_INPUT_TITLE,
    title,
  }),
  setInputContent: content => ({
    type: actionTypes.SET_INPUT_CONTENT,
    content
  }),
  setInputColor: color => ({
    type: actionTypes.SET_INPUT_COLOR,
    color
  }),
  setInputId: id => ({
    type: actionTypes.SET_INPUT_ID,
    id,
  }),
  resetInputs: () => ({
    type: actionTypes.RESET_INPUT,
  })
}
