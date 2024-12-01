/*Consider breaking this down into separate actionCreator files if it becomes overly crowded!
Remember separation of concerns.
Import the action-types and export an action-creator function for each.
Each synchronous function should return an action object with a type and a payload -- these will be passed to the reducer.
Each asynchronous function should dispatch its action object (type/payload) to the reducer.
*/
import {
  GET_MOCK_FILTERED_DATA,
  SET_VISUALIZATION_DATA,
  SET_HEAT_MAP_YEARS,
  RESET_VISUALIZATION_QUERY,
  SET_ASYLUM_OFFICE_FILTER,
  SET_CONTINENT_FILTER,
  SET_GEOPOLITICAL_FILTER,
  FILTER_SEARCH,
  RESET_CASE_DATA,
} from '../actionTypes';

export const getMockFilteredData = () => (dispatch) => {
  // Simulating an API call or data load
  fetch('/path/to/test_data.json')
      .then(response => response.json())
      .then(data => {
          dispatch({
              type: GET_MOCK_FILTERED_DATA,
              payload: data,
          });
      })
      .catch(error => console.error('Error fetching mock data:', error));
};


export const setVisualizationData = (view, office, data) => {
  return {
    type: SET_VISUALIZATION_DATA,
    payload: {
      view,
      office,
      data,
    },
  };
};

export const resetVisualizationQuery = (view, office) => {
  return {
    type: RESET_VISUALIZATION_QUERY,
    payload: {
      view,
      office,
    },
  };
};

export const setHeatMapYears = (view, office, idx, year) => {
  return {
    type: SET_HEAT_MAP_YEARS,
    payload: {
      view,
      office,
      idx,
      year,
    },
  };
};




// Action creator to set asylum office filter
export const setAsylumOfficeFilter = (office) => {
  return {
    type: SET_ASYLUM_OFFICE_FILTER,
    payload: office,
  };
};

// Action creator to set continent filter
export const setContinentFilter = (continent) => {
  return {
    type: SET_CONTINENT_FILTER,
    payload: continent,
  };
};

// Action creator to set geopolitical filter
export const setGeopoliticalFilter = (geopolitical) => {
  return {
    type: SET_GEOPOLITICAL_FILTER,
    payload: geopolitical,
  };
};

// Action creator to perform a search filter
export const filterSearch = (searchQuery) => {
  return {
    type: FILTER_SEARCH,
    payload: searchQuery,
  };
};

// Action creator to reset case data (when you want to clear filters or data)
export const resetCaseData = () => {
  return {
    type: RESET_CASE_DATA,
  };
};