// vendor modules
import { createSelector } from 'reselect';

export const getRepos = state => {
  return state.data.repos;
};

export const getReposForSearch = createSelector([getRepos], repos =>
  // eslint-disable-next-line camelcase
  repos.map(({ id, name, html_url }) => ({
    id,
    title: name,
    url: html_url,
  })),
);
