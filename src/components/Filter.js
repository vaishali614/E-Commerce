import React, { Component } from 'react'
import { connect } from 'react-redux';
import { filterProducts, sortProducts } from '../actions/productActions';

class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    {this.props.filterProducts.length} products found
                </div>
                <div className="col-md-4">
                    <label>
                        Order By
                        <select className="form-control" value={this.props.sort} onChange={(e) => this.props.sortProducts(this.props.filterProducts, e.target.value)}>
                            <option value="">Select</option>
                            <option value="lowest">Lowest to Highest</option>
                            <option value="highest">Highest to Lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label>
                        Filter Size
                        <select className="form-control" value={this.props.size} onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                            <option value="">Select</option>
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    filterProducts: state.products.filterProducts,
    size: state.products.size,
    sort: state.products.sort
})
export default connect(mapStateToProps, {filterProducts, sortProducts})(Filter);