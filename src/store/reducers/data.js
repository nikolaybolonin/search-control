// utils
import { type } from 'constants/actionTypes';

export default (
  state = {
    repos: [],
  },
  action,
) => {
  switch (action.type) {
    case type.INSERT_FETCHED_REPOS: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};
