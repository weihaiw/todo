import React, { Component } from 'react';
import TodoList from './TodoList.js'
import Form from './Form.js' 
import Actions from './Actions.js'
import { Provider } from 'react-redux'
import store from './redux/store'
const Header = () =>(
  <div className="header">TODO</div>
)

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="main">
          <Header />
          <TodoList />
          <Form />
          <Actions />
        </div>
      </Provider>
    );
  }
}

export default Main;
