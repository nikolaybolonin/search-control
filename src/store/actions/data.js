// utils
import { API_URL } from 'constants/const';
import { type } from 'constants/actionTypes';

export const fetchRepos = () => {
  return async dispatch => {
    // TODO: Remove this demo timeout after demo
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await fetch(`${API_URL}?sort=full_name`, {
      method: 'GET',
    });

    if (response.ok) {
      const repos = await response.json();
      dispatch({
        type: type.INSERT_FETCHED_REPOS,
        payload: { repos },
      });
    } else {
      console.warn(`Ошибка HTTP: ${response.status}`);
    }
  };
};
