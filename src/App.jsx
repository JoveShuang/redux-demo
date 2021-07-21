import React, { Component } from 'react'
import store from './redux/store'
import Count from './containers/Count'
import Person from './containers/Person'


export default class App extends Component {
    render() {
        return (
            <div>
                <Count store={store}/>
                <Person />
            </div>
        )
    }
}
