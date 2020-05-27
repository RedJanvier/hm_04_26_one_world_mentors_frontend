import {FETCH_SINGLE_USER} from '../actions/types';

const intitialState = {
  user: [],
}

const fetchSingleUserProfile = (state = intitialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_USER:
      return {
        ...state,
        user: action.payload
      };
      default:
      return state;
  }
};

export default fetchSingleUserProfile;