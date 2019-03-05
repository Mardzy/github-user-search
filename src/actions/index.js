import github from '../apis/github';

export const fetchUser = (user) => async dispatch => {
  const response = await github.get(`users/${user}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchEmail = (user) => async dispatch => {
  const response = await github.get(`users/${user}/events/public`);

  dispatch({ type: 'FETCH_EMAIL', payload: response.data });
};

export const fetchUsers = (user) => async dispatch => {
  const config = { params:{ q: user, sort: 'followers' } };
  const response = await github.get(`search/users?`, config);

  dispatch({ type: 'FETCH_USERS', payload: response.data });
};


