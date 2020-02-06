import HouseService from '../services/HouseService';
import history from '../history'
import { loading, doneLoading } from './SystemActions';

/*
export function loadUsers() {
  return async dispatch => {
    try {
      // example for loading
      dispatch(loading());
      const users = await UserService.getUsers();
      dispatch(setUsers(users));
    } catch (err) {
      console.log('UserActions: err in loadUsers', err);
      // example for rerouting - after changing the store
      // history.push('/some/path');
    } finally {
      dispatch(doneLoading());
    }
  };
}

*/


export function filterHouses(filter) {
  console.log(filter)
  return async (dispatch) => {
    try {
      dispatch(loading());
      dispatch(_setFilter(filter))
      let houses = await HouseService.query(filter);
      await dispatch(_setHouses(houses))
    } catch (err) {
      console.log('filter houses action err', err)
      throw err;
    }
    finally {
      dispatch(doneLoading());
    }
  }
}
export function getBestByCountry(filter) {

  console.log(filter)
  return async (dispatch) => {
    let houses = await HouseService.query(filter);
    console.log(houses)
    dispatch(_setBestByCountry(filter.countries[0], houses))
    // dispatch(_setBestByCountry(filter.location.toUpperCase(),houses))
  }
}

export function AddToFavorites(ids) {
  if (ids.length > 0) {
    return async dispatch => {
      try {
        const favHouses = await HouseService.query({ ids: ids })
        dispatch(_AddToFavs(favHouses))
      }
      catch (err) {
        console.log(err)
      }
    }
  } else {
    return dispatch => {
      dispatch(_AddToFavs([]))
    }
  }

}
export function setMyHouses(ids) {
  if (ids.length > 0) {
    return async dispatch => {
      try {
        const myHouses = await HouseService.query({ ids: ids })
        dispatch(_setMyHouses(myHouses))
      }
      catch (err) {
        console.log(err)
      }
    }
  } else {
    return dispatch => {
      dispatch(_setMyHouses([]))
    }
  }

}

export function setFilter(filter) {
  return dispatch => {
    dispatch(_setFilter(filter));
  };
}

export function saveHouse(house) {
  return async dispatch => {
    try {
      const addedHouse = await HouseService.save(house);
      console.log('action add house', addedHouse)
      house._id ? dispatch(_updateHouse(addedHouse)) : dispatch(_addHouse(addedHouse));
      return addedHouse
    } catch (err) {
      console.log('HouseActions: err in addHouse', err);
    }
  };
}

export function deleteHouse(houseId) {
  return async (dispatch) => {
    try {
      await HouseService.remove(houseId)
      console.log('house delete action')
      dispatch(_deleteHouse(houseId))
    }
    catch (err) {
      console.log(err)
    }

  }
}

function _setBestByCountry(country, houses) {
  return {
    type: `SET_BEST_${country.toUpperCase()}`,
    houses
  }
}

function _AddToFavs(houses) {
  return {
    type: 'SET_FAVS',
    houses
  }
}
function _setMyHouses(houses) {
  return {
    type: 'SET_MY_HOUSES',
    houses
  }
}


function _setHouses(houses) {
  return {
    type: 'SET_HOUSES',
    houses
  };
}
function _setFilter(filter) {
  return {
    type: 'SET_FILTER',
    filter
  };
}

function _addHouse(house) {
  return {
    type: 'HOUSE_ADD',
    house
  };
}

function _updateHouse(house) {
  return {
    type: 'HOUSE_UPDATE',
    house
  };
}

function _deleteHouse(houseId) {
  return {
    type: 'HOUSE_REMOVE',
    houseId
  };
}
