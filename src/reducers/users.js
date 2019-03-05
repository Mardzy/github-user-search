export default function (state = [], action) {
  switch (action.type) {
    case 'FETCH_USERS':
      console.log('action', action);
      return action.payload.items;
    default:
      return state;
  }
};
