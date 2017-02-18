import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='Please Log in' />
      </Scene>

      <Scene key='main'>
        <Scene
          initial
          onRight={() => { Actions.employeeCreate(); }}
          rightTitle='Add'
          key='employeeList'
          component={EmployeeList}
          title='Employees'
        />
        <Scene
          key='employeeCreate'
          component={EmployeeCreate}
          title='Create Employee'
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;