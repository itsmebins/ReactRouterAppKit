'use strict';

export default (state = {}, action) => {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
    console.log(action.payload);
      return {
        ...state,
        tags: action.payload
      };
    case 'HOME_PAGE_UNLOADED':
      return {};
  }

  return state;
};
