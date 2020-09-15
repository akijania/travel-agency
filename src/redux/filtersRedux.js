/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// DONE - add other action types
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
export const CHANGE_DURATION_TO = createActionName('CHANGE_DURATION_TO');
export const CHANGE_DURATION_FROM = createActionName('CHANGE_DURATION_FROM');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// DONE - add other action creators
export const createActionAddTag = payload => ({ payload, type: ADD_TAG });
export const createActionRemoveTag = payload => ({ payload, type: REMOVE_TAG });
export const createActionChangeDurationTo = value => ({ value, type: CHANGE_DURATION_TO });
export const createActionChangeDurationFrom = value => ({ value, type: CHANGE_DURATION_FROM });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // DONE - handle other action types
    case ADD_TAG:
      return {...statePart, 
        tags:[...statePart.tags, action.payload]};
    case REMOVE_TAG:
      return {...statePart, 
        tags:[...statePart.tags, action.payload]};
    case CHANGE_DURATION_TO:
      return {
        ...statePart, 
        duration: {
          ...statePart.duration,
          to: action.value,  
        },
      };
    case CHANGE_DURATION_FROM:
      return {...statePart, 
        duration: {
          ...statePart.duration,
          from: action.value,
        },
      };
    default:
      return statePart;
  }
}
