// utils
import { type } from 'constants/actionTypes';

export default (
  state = {
    repos: [],
  },
  action,
) => {
  switch (action.type) {
    case type.GET_REPOS: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};
