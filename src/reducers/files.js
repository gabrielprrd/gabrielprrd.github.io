import actionsTypes from '../constants/files';
import INITIAL_STATE from './filesStore';

const fileReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.CREATE_FILE:
      return { ...state, files: [state.files] };
    case actionsTypes.DELETE_FILE:
      return state; // not necessary for now
    default:
      return state;
  }
};

export default fileReducers;
