function recursiveFilter(obj) {
  let result = null;
  if (obj instanceof Array) {
    for (let i = 0; i < obj.length; i++) {
      result = recursiveFilter(obj[i]);
      if (result) {
        break;
      }
    }
  }
  else {
    for (const prop in obj) {
      if (prop === 'email') {
        return obj[prop]
      }
      else if (obj[prop] instanceof Object || obj[prop] instanceof Array) {
        result = recursiveFilter(obj[prop]);
        if (result) {
          break;
        }
      }
    }
  }
  return result;
}

export default function (state = [], action) {
  switch (action.type) {
    case 'FETCH_EMAIL':
      return recursiveFilter(action.payload);
    default:
      return state;
  }
};
