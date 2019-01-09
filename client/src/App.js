import React, { Component } from 'react';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import store from './store';

import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";

class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<div className="App">
					<AppNavbar/>
					<ItemModal></ItemModal>
					<ShoppingList/>
				</div>
			</Provider>
    );
  }
}

export default App;
