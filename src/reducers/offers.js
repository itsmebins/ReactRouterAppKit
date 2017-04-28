export default (state = {}, action) => {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
    console.log(action.payload);
      return {
        ...state,
        offers: action.payload.results,
        currentViewingOffer: {}
      };
    case 'HOME_PAGE_UNLOADED':
      return {};
    case 'OFFER_DETAIL_PAGE_LOADED':
      return {
        ...state,
        currentViewingOffer: action.payload
      };
    case 'OFFER_DETAIL_PAGE_UNLOADED':
      return {  ...state, currentViewingOffer: {}};
  }
  return state;
};
