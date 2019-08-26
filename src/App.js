import React,{Component} from 'react';
import {Provider,connect} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {reducer} from './reducers/reducer'
import Item from './components/Item'
import {fetchItem} from './actions/action'

const store=createStore(reducer,applyMiddleware(thunkMiddleware))

const ReduxItem=connect(mapStateToProps)(Item)

class App extends Component{

  componentDidMount(){
    
    store.dispatch(fetchItem())
    
    store.subscribe(()=>{
      console.log(store.getState())
    })
  }

  

  render(){
    return (
      <Provider store={store}>
        <ReduxItem />
      </Provider>
      
    )
  }
}

function mapStateToProps(state){
  return state
}



export default App;
