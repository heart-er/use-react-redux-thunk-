
import { FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS, FETCH_ITEM_FAILURE } from '../actions/action'

export function reducer(state = {
  message: [],
  isFetchData: false,
  status: 'ready'
}, action) {
  switch (action.type) {
    case FETCH_ITEM_REQUEST:
      return Object.assign({}, state, {
        isFetchData: true
      })
    case FETCH_ITEM_SUCCESS:
      
      return Object.assign({}, state, {
        isFetchData: true,
        message: action.item
      })
    case FETCH_ITEM_FAILURE:
      return state
    default:
      return state
  }
}