import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDUkvzHlXdZJK0n-lPDtKSorBKiezZXFJM',
      authDomain: 'manager-afae2.firebaseapp.com',
      databaseURL: 'https://manager-afae2.firebaseio.com',
      storageBucket: 'manager-afae2.appspot.com',
      messagingSenderId: '48912184062'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
