import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm/LoginForm';
import EmployeeList from './components/Employee/EmployeeList';
import EmployeeCreate from './components/Employee/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="Employee List"
          />
          <Scene
            leftTitle="Backxzxzx"
            onRight={() => Actions.main()}
            key="employeeCreate"
            component={EmployeeCreate}
            title="Employee Create"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
