import {getItemList} from '../api/index'

export const FETCH_ITEM_REQUEST="FETCH_ITEM_REQUEST"
export function fetchItemRequest(item){
  return {
    type:FETCH_ITEM_REQUEST,
    item:item
  }
}

export const FETCH_ITEM_SUCCESS="FETCH_ITEM_SUCCESS"
export function fetchItemSuccess(item){
  return {
    type:FETCH_ITEM_SUCCESS,
    item:item
  }
}

export const FETCH_ITEM_FAILURE="FETCH_ITEM_FAILURE"
export function fetchItemFailure(error){
  return {
    type:FETCH_ITEM_FAILURE,
    error:error
  }
}

export function fetchItem(){
  return (dispatch)=>{
    dispatch(fetchItemRequest())
    getItemList()
    .then(res=>{dispatch(fetchItemSuccess(res.message))})
    .catch(err=>{dispatch(fetchItemFailure(err))})
  }
}