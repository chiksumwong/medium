import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

/* Components */
import Header from './components/Header';

import SignInWith from './components/SignInWith'

import Feed from './components/Feed'
import Profile from './components/Profile'
import ArticleView from './components/ArticleView'
import Editor from './components/Editor'

//Front Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

/* User Authentication */
import requireAuthentication from './utils/requireAuth'     //src/utils/requireAuth.js

library.add(faStroopwafel)

/* Router */
class App extends Component {
    render() {
        const pathname = window.location.pathname
        return ( 
            <div>
            {/* If url includes is editor , return null , so no Header */}
            { !pathname.includes('editor') ? <Header /> : '' }

            <SignInWith />
            
            <Switch>
                <Route exact path="/" component={Feed} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/articleview/:id" component={ArticleView} />
                <Route path="/editor" component={requireAuthentication(Editor)} />

                <Route path="**" component={Feed} />
            </Switch>
            </div>
        );
    }
}
export default App;
