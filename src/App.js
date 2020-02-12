import React, {Component} from 'react';
import './App.css';
import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  // component lifecycle method
  componentWillMount(){
    fetch("http://localhost:8000/products").then(res => res.json())
    .then(data => this.setState({
      products: data,
      filteredProducts: data
    }));
    if(localStorage.getItem("cartItems")){
      this.setState({cartItems: JSON.parse(localStorage.getItem("cartItems"))});
    }
  }
  
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>E-Commerce Shopping Cart Application</h1>
          <hr/>
          <div className="row">
            <div className="col-md-8">
              <Filter 
                size={this.state.size} 
                sort={this.state.sort} 
                handleChangeSize={this.handleChangeSize}
                handleChangeSort={this.handleChangeSort} 
                count={this.state.filteredProducts.length} 
              />
              <hr />
              <Products 
                products={this.state.filteredProducts} 
                handleAddToCart={this.handleAddToCart}
              />
            </div>
            <div className="col-md-4">
              <Basket 
                cartItems={this.state.cartItems} 
                handleRemoveFromCart={this.handleRemoveFromCart} 
              />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
