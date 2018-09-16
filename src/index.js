//React
import React from 'react';
import ReactDOM from 'react-dom';

//Redux
import { Provider } from 'react-redux';

//Router
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';


//For production
// import registerServiceWorker from './registerServiceWorker';

//store
import { store, history } from './redux/store';

//action
import { getUser } from './redux/actions/actions'

import './assets/medium.css';
import App from './App.js';


//User Auth
/* 
*  Here, we checked to if our localStorage key "Auth" is already defined, 
*  if so we first update our isAuth state. 
*/
if(localStorage.Auth) {
    console.log('first dispatch')
    //console.log(localStorage.Auth)

    // update localstorage
    store.dispatch({type: 'SET_USER', 
                    user: JSON.parse(localStorage.Auth)})
    //Authentication will be executed before its execution finishes and updates the isAuth state.

    var _id = JSON.parse(localStorage.Auth)._id
    getUser(_id).then((res)=>{
        //console.log(JSON.parse(res))
        store.dispatch({type: 'SET_USER', user: res})
    })
}

// Access to Store
ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));


//For production
// registerServiceWorker();