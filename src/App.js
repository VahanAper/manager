import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
        <View>
          <Text>manager app</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
